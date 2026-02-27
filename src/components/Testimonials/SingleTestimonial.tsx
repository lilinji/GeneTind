import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full h-full group">
      <div className="relative h-full rounded-2xl bg-white/60 dark:bg-gray-dark/40 backdrop-blur-md border border-white/20 dark:border-white/10 p-8 shadow-two drop-shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(74,108,247,0.3)] hover:border-primary/30 overflow-hidden lg:px-5 xl:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 mb-6 flex items-center space-x-1 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(251,176,64,0.5)] transition-all duration-300 transform origin-left">
          {ratingIcons}
        </div>

        <p className="relative z-10 border-b border-body-color/10 pb-8 mb-8 text-base leading-relaxed text-body-color dark:border-white/10 dark:text-gray-300 font-medium italic transition-colors duration-300 group-hover:text-body-color-dark dark:group-hover:text-white">
          “{content}”
        </p>

        <div className="relative z-10 flex items-center">
          <div className="relative mr-4 h-[55px] w-full max-w-[55px] overflow-hidden rounded-full border-2 border-transparent transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(74,108,247,0.3)]">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-bold text-dark dark:text-white lg:text-base xl:text-lg transition-colors duration-300 group-hover:text-primary">
              {name}
            </h3>
            <p className="text-sm text-body-color font-medium">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
