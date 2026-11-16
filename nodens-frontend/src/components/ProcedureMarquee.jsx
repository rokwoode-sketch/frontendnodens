export default function ProcedureMarquee({ items }) {
  return (
    <section className="bg-white border-b border-clinical-line sticky top-[60px] z-30 overflow-hidden">
      <div className="relative py-3.5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={`#${item.id}`}
              className="group flex flex-shrink-0 items-center gap-6 px-6 whitespace-nowrap"
            >
              <span className="text-[12px] font-semibold tracking-[0.04em] text-navy-600 transition-colors group-hover:text-teal-medical">
                {item.title}
              </span>
              <span className="h-px w-4 bg-gold-400/70" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
