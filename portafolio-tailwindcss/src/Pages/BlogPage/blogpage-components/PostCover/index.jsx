import PropTypes from "prop-types";
import { useMemo } from "react";

const gradients = [
  "from-pink-500 via-red-500 to-yellow-500",
  "from-blue-400 via-indigo-500 to-purple-500",
  "from-green-400 via-teal-500 to-blue-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-yellow-400 via-orange-500 to-red-500",
  "from-slate-900 via-purple-900 to-slate-900",
];

const patterns = [
  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
  "linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent)",
  "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)",
];

export default function PostCover({ title, tags, className = "" }) {
  const style = useMemo(() => {
    // Simple hash function to generate a consistent index from the title
    let hash = 0;
    const str = title + (tags?.[0] || "");
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const gradientIndex = Math.abs(hash) % gradients.length;
    const patternIndex = Math.abs(hash >> 3) % patterns.length;

    return {
      gradient: gradients[gradientIndex],
      pattern: patterns[patternIndex],
    };
  }, [title, tags]);

  return (
    <div
      className={`relative overflow-hidden w-full bg-gradient-to-br ${style.gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: style.pattern,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Content Center (optional, maybe an icon or the category) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {tags && tags.length > 0 && (
          <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-sm tracking-wider uppercase border border-white/30 shadow-lg">
            {tags[0]}
          </span>
        )}
      </div>
    </div>
  );
}

PostCover.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};
