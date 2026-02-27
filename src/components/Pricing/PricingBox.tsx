const PricingBox = (props: {
  price?: string;
  duration?: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  return (
    <div className="w-full h-full group">
      <div className="relative h-full rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex items-center justify-between">
          <h3 className="mb-2 text-[32px] font-bold text-black dark:text-white transition-colors duration-300 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#9b8fff]">
            {price && (
              <>
                $<span className="amount">{price}</span>
                <span className="text-body-color text-lg font-medium transition-colors duration-300 group-hover:text-body-color-dark dark:group-hover:text-gray-300">
                  /{duration}
                </span>
              </>
            )}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white transition-colors duration-300 group-hover:text-primary">
            {packageName}
          </h4>
        </div>
        <p className="relative z-10 text-body-color mb-7 text-base transition-colors duration-300 group-hover:text-body-color-dark dark:group-hover:text-gray-300">{subtitle}</p>
        <div className="relative z-10 border-b border-body-color/10 pb-8 mb-8 dark:border-white/10">
          <button className="flex w-full items-center justify-center rounded-full bg-primary/90 p-4 text-base font-bold text-white transition-all duration-300 hover:bg-primary shadow-[0_5px_15px_rgba(74,108,247,0.2)] hover:shadow-[0_10px_25px_rgba(74,108,247,0.4)] hover:-translate-y-1">
            Start Free Trial
          </button>
        </div>
        <div className="relative z-10">{children}</div>
        <div className="absolute right-0 bottom-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
