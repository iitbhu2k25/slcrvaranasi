'use client';


import Script from 'next/script';
import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  GA_MEASUREMENT_ID,
  isAnalyticsEnabled,
  trackPageView,
  trackScrollDepth,
  trackTimeOnPage,
  trackOutboundLink,
  trackDownload,
} from '@/lib/gtag';

const DOWNLOAD_EXTENSIONS = [
  'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx',
  'zip', 'rar', '7z', 'csv', 'txt', 'mp4', 'mp3',
];

const SCROLL_MILESTONES = [25, 50, 75, 90];

/**
 * Loads GA4 and reports the engagement signals gtag cannot infer on its own
 * in an App Router SPA: client-side page views, scroll depth, time on page,
 * outbound clicks and file downloads.
 *
 * Rendered once from the root layout.
 */
export default function Analytics() {
  if (!isAnalyticsEnabled) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
      <AnalyticsTracker />
    </>
  );
}

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Page views on every App Router navigation. gtag's automatic page_view is
  // disabled above, so this is the single source of truth.
  const url = searchParams?.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  useEffect(() => {
    if (!url) return;
    trackPageView(url);
  }, [url]);

  useScrollDepth(url);
  useTimeOnPage(url);
  useLinkTracking();

  return null;
}

/** Fires each scroll milestone once per page. */
function useScrollDepth(url: string | null) {
  const reached = useRef<Set<number>>(new Set());

  useEffect(() => {
    reached.current = new Set();
  }, [url]);

  useEffect(() => {
    if (!url) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const percent = (window.scrollY / scrollable) * 100;
        for (const milestone of SCROLL_MILESTONES) {
          if (percent >= milestone && !reached.current.has(milestone)) {
            reached.current.add(milestone);
            trackScrollDepth(milestone, url);
          }
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [url]);
}

/**
 * Reports seconds spent on each page when the user navigates away or hides the
 * tab. Uses `visibilitychange` rather than `unload`, which is unreliable on mobile.
 */
function useTimeOnPage(url: string | null) {
  useEffect(() => {
    if (!url) return;

    const start = Date.now();
    let sent = false;

    const send = () => {
      if (sent) return;
      const seconds = Math.round((Date.now() - start) / 1000);
      // Ignore instant bounces — they add noise without signal.
      if (seconds < 1) return;
      sent = true;
      trackTimeOnPage(seconds, url);
    };

    const onVisibility = () => {
      if (document.visibilityState === 'hidden') send();
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      send(); // navigating to another route within the app
    };
  }, [url]);
}

/**
 * One delegated click listener for the whole document, so outbound links and
 * downloads are captured without touching every anchor in the codebase.
 */
function useLinkTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      const label = anchor.textContent?.trim().slice(0, 100) || undefined;

      if (href.startsWith('mailto:')) {
        trackOutboundLink(href, label);
        return;
      }
      if (href.startsWith('tel:')) {
        trackOutboundLink(href, label);
        return;
      }

      let parsed: URL;
      try {
        parsed = new URL(href, window.location.href);
      } catch {
        return;
      }

      const extension = parsed.pathname.split('.').pop()?.toLowerCase();
      if (extension && DOWNLOAD_EXTENSIONS.includes(extension)) {
        trackDownload(parsed.href, label);
        return;
      }

      if (parsed.hostname !== window.location.hostname) {
        trackOutboundLink(parsed.href, label);
      }
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
}
