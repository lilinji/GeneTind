import { Check, Minus } from "lucide-react";

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  const isActive = status === "active";

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          isActive
            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
            : "border-white/10 bg-white/[0.02] text-zinc-400"
        }`}
      >
        {isActive ? <Check className="h-2.5 w-2.5" /> : <Minus className="h-2.5 w-2.5" />}
      </span>
      <p
        className={`text-xs font-mono leading-tight ${
          isActive ? "text-zinc-300" : "text-zinc-400"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default OfferList;
