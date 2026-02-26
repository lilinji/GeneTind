import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative z-10 overflow-hidden py-16 md:py-20 lg:py-28">
        {/* Ambient AI Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 -z-10 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="container relative z-20">
          <SectionTitle
            title="GneroAI 一个平台无限可能"
            paragraph={
              <>
                以 <span className="text-primary font-bold">GneroAI</span> 为核心，深度融合多组学、生物计算与智能分析能力，为生命科学研究与产业创新提供一体化智能平台。
              </>
            }
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
