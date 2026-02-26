import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full h-full group">
      <div className="wow fadeInUp relative h-full rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden" data-wow-delay=".15s">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-8 flex h-[80px] w-[80px] items-center justify-center rounded-2xl shadow-[inset_0_0_20px_rgba(74,108,247,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_25px_rgba(74,108,247,0.5)]">
          {icon}
        </div>

        <h3 className="relative z-10 mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white transition-colors duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#9b8fff]">
          {title}
        </h3>

        <p className="relative z-10 text-body-color border-t border-body-color/10 pt-4 dark:border-white/10 text-base leading-relaxed font-medium transition-colors duration-300 group-hover:text-body-color-dark">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
