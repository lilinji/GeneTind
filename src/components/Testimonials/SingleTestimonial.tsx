import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { Star } from "lucide-react";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full h-full group">
      <div className="relative h-full rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-8 backdrop-blur-xl shadow-xs transition-all duration-300 hover:border-emerald-500/40 hover:bg-white hover:shadow-lg dark:border-white/[0.08] dark:bg-[#0b111d]/90 dark:hover:bg-[#0e1626] flex flex-col justify-between">
        <div>
          {/* Star Rating */}
          <div className="flex items-center space-x-1 text-emerald-500 dark:text-emerald-400">
            {Array.from({ length: star }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400" />
            ))}
          </div>

          {/* Quote Body */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300 italic font-serif">
            “{content}”
          </p>
        </div>

        {/* Author Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-white/[0.08] flex items-center gap-3.5">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-white/10">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-mono text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {name}
            </h4>
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
