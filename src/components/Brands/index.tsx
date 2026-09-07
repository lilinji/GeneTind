import { techPartners } from "./brandsData";

const Brands = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white dark:bg-[#060911] py-16 transition-colors duration-300">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Overline heading */}
        <div className="text-center mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Engineered with Leading AI & Bioinformatics Infrastructure
          </p>
        </div>

        {/* Partners Ribbon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techPartners.map((partner) => (
            <div
              key={partner.id}
              className="group rounded-xl border border-zinc-200/80 bg-zinc-50/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-md dark:border-white/[0.06] dark:bg-[#0b111d]/70 dark:hover:bg-[#0e1626] text-center"
            >
              <div className="font-mono text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {partner.name}
              </div>
              <div className="mt-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400 truncate">
                {partner.category}
              </div>
              <div className="mt-1 font-mono text-[10px] text-zinc-400 dark:text-zinc-400 truncate">
                {partner.spec}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;
