// Google Analytics 4 helpers.
// Measurement ID is read from the environment so staging/preview builds can
// point at a different property (or disable tracking entirely) without a code change.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

// GA is only wired up in production builds with an ID present, so every helper
// below is a no-op elsewhere. This keeps local development out of the reports.
export const isAnalyticsEnabled =
  Boolean(GA_MEASUREMENT_ID) && process.env.NODE_ENV === 'production';

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Send a custom GA4 event. Safe to call from anywhere, including during SSR
 * or before the gtag script has finished loading.
 */
export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

/**
 * Manual page_view. Needed because we disable gtag's automatic
 * `page_view` so App Router client-side navigations are reported exactly once.
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: url,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}

/** Outbound link click to an external domain. */
export function trackOutboundLink(url: string, label?: string) {
  trackEvent('click_outbound', {
    link_url: url,
    link_domain: safeHostname(url),
    link_text: label,
  });
}

/** File download (PDFs, reports, datasets). */
export function trackDownload(fileUrl: string, label?: string) {
  trackEvent('file_download', {
    file_name: fileUrl.split('/').pop() ?? fileUrl,
    file_extension: fileUrl.split('.').pop()?.toLowerCase(),
    link_url: fileUrl,
    link_text: label,
  });
}

/** Form lifecycle: 'start' when first edited, 'submit'/'error' on completion. */
export function trackForm(
  formName: string,
  action: 'start' | 'submit' | 'error',
  params: GtagParams = {}
) {
  trackEvent(`form_${action}`, { form_name: formName, ...params });
}

/** Navigation menu usage — which sections people actually open. */
export function trackNavigation(label: string, href: string, level: string) {
  trackEvent('navigation_click', {
    nav_label: label,
    nav_href: href,
    nav_level: level,
  });
}

/** Video engagement: start, progress milestones, and completion. */
export function trackVideo(
  action: 'start' | 'progress' | 'complete',
  title: string,
  percent?: number
) {
  trackEvent(`video_${action}`, {
    video_title: title,
    ...(percent !== undefined ? { video_percent: percent } : {}),
  });
}

/** Scroll depth milestone (25/50/75/90%). */
export function trackScrollDepth(percent: number, path: string) {
  trackEvent('scroll_depth', { percent_scrolled: percent, page_path: path });
}

/** Time spent on a page, sent on unload/navigation away. */
export function trackTimeOnPage(seconds: number, path: string) {
  trackEvent('time_on_page', { engagement_seconds: seconds, page_path: path });
}

function safeHostname(url: string) {
  try {
    return new URL(url, typeof window !== 'undefined' ? window.location.href : undefined)
      .hostname;
  } catch {
    return undefined;
  }
}
