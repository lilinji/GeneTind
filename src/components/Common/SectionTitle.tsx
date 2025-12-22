const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "",
  paragraphClassName = "",
}: {
  title: string;
  paragraph: string | React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  titleClassName?: string;
  paragraphClassName?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px] ${titleClassName}`}>
          {title}
        </h2>
        <div className={`text-base leading-relaxed! text-body-color md:text-lg ${paragraphClassName}`}>
          {paragraph}
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
