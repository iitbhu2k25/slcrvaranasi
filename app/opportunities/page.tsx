'use client';

import { useState } from 'react';
import { FileText, Search } from 'lucide-react';

// ─── CURRENT OPPORTUNITIES ─────────────────────────────────────────────────────
// Add live opportunities here. Leave empty to show "No current opportunities".
const currentOpportunities: any[] = [
  // Example (uncomment to activate):
  // {
  //   id: 1,
  //   title: 'Junior Research Fellow – DSS for Water Resource Management',
  //   isNew: true,
  //   pdfFile: '/opportunities/project_jrf_civ_system.pdf',
  // },
];

// ─── PREVIOUS OPPORTUNITIES ────────────────────────────────────────────────────
const previousOpportunities = [
  {
    id: 1,
    title: 'Junior Research Fellow (JRF) – Decision Support System for Water Resource Management',
    isNew: false,
    pdfFile: '/opportunities/project_jrf_civ_system.pdf',
  },
  {
    id: 2,
    title: 'Young Professional / Consultant Grade-1, Research Associate I/II/III & Senior Research Fellow',
    isNew: false,
    pdfFile: '/opportunities/project_ypc_ra_srf_civil_rivers.pdf',
  },
  {
    id: 3,
    title: 'Young Professional , Research Associate, JRF  & Project Assistant  – DSS Water Resource Management',
    isNew: false,
    pdfFile: '/opportunities/project_civ_gis_233_young_professional_dss_slrc.pdf',
  },
  {
    id: 4,
    title: 'Young Professional – Project Coordination & Social Community Expert, and JRF',
    isNew: false,
    pdfFile: '/opportunities/project_dss_civ_water.pdf',
  },
  {
    id: 5,
    title: 'Senior Project Manager (Professional Grade-I) & Project Assistant (Admin/Accounts) – SLCR Secretariat (Apr 2025)',
    isNew: false,
    pdfFile: '/opportunities/project_spa_pa_civil.pdf',
  },
  {
    id: 6,
    title: 'Senior Project Manager (Professional Grade-I) & Project Assistant (Admin/Accounts) – SLCR Secretariat (Feb 2025)',
    isNew: false,
    pdfFile: '/opportunities/project_spm_pa_civil.pdf',
  },
  {
    id: 7,
    title: 'Project Attendant, Project Assistant & Research Associate I/II/III',
    isNew: false,
    pdfFile: '/opportunities/project_pa_ra_civ_cleanrivers.pdf',
  },
];

// ─── ROW COMPONENT ─────────────────────────────────────────────────────────────
function OpportunityRow({
  title,
  isNew,
  pdfFile,
}: {
  title: string;
  isNew?: boolean;
  pdfFile?: string;
}) {
  return (
    <div className="flex items-start gap-2 py-3 border-b border-slate-100 last:border-0 group">
      {/* Arrow bullet */}
      <span className="text-teal-600 font-bold text-sm mt-0.5 shrink-0 select-none">»</span>

      {/* Title */}
      <span className="text-sm text-slate-700 leading-relaxed flex-1">
        {pdfFile ? (
          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 hover:underline underline-offset-2 transition-colors"
          >
            {title}
          </a>
        ) : (
          title
        )}
        {isNew && (
          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-400 text-amber-600 bg-amber-50 align-middle leading-none">
            NEW
          </span>
        )}
      </span>

      {/* PDF icon */}
      {pdfFile && (
        <a
          href={pdfFile}
          target="_blank"
          rel="noopener noreferrer"
          title="Download PDF"
          className="shrink-0 mt-0.5 text-slate-300 group-hover:text-teal-500 transition-colors"
        >
          <FileText size={15} />
        </a>
      )}
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function OpportunitiesPage() {
  const [search, setSearch] = useState('');

  const filteredPrev = previousOpportunities.filter(
    o => search === '' || o.title.toLowerCase().includes(search.toLowerCase())
  );

  const hasCurrent = currentOpportunities.length > 0;

  return (
    <main className="min-h-screen bg-white">

      {/* ── PAGE HEADER ── */}
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
        <h1 className="text-xl font-bold text-slate-800">Career &amp; Research Opportunities</h1>
        <p className="text-xs text-slate-500 mt-0.5">Smart Laboratory on Clean Rivers — IIT (BHU), Varanasi</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        {/* ─── SECTION: CURRENT OPENINGS ─── */}
        <section>
          {/* Section heading bar */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-1 bg-teal-600 rounded-full" />
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
              Current Openings
            </h2>
            {hasCurrent && (
              <span className="ml-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                {currentOpportunities.length} Open
              </span>
            )}
          </div>

          <div className="border border-slate-200 rounded-lg px-4 py-1 bg-white">
            {hasCurrent ? (
              currentOpportunities.map(opp => (
                <OpportunityRow
                  key={opp.id}
                  title={opp.title}
                  isNew={opp.isNew}
                  pdfFile={opp.pdfFile}
                />
              ))
            ) : (
              <p className="text-sm text-slate-400 py-5 text-center italic">
                No current openings at the moment. Please check back soon.
              </p>
            )}
          </div>
        </section>

        {/* ─── SECTION: PREVIOUS OPPORTUNITIES ─── */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 bg-slate-400 rounded-full" />
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                Previous Opportunities
              </h2>
            </div>

            {/* Search box */}
            <div className="relative">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search positions…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-8 pr-4 py-1.5 rounded border border-slate-200 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-100 transition-all w-52 bg-white"
              />
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg px-4 py-1 bg-white">
            {filteredPrev.length > 0 ? (
              filteredPrev.map(opp => (
                <OpportunityRow
                  key={opp.id}
                  title={opp.title}
                  isNew={opp.isNew}
                  pdfFile={opp.pdfFile}
                />
              ))
            ) : (
              <p className="text-sm text-slate-400 py-5 text-center italic">
                No results found.
              </p>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}