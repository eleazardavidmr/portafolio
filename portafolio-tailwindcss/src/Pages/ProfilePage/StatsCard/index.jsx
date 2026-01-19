import PropTypes from "prop-types";
import { TbTrendingUp } from "react-icons/tb";
export default function StatsCard({ delay, icon, label, value }) {
  return (
    <div
      className="relative group p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background with Glassmorphism */}
      <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl group-hover:shadow-primary/20 transition-all duration-500" />

      {/* Decorative gradient blur */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-700" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-slate-950 transition-all duration-500 shadow-inner">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <TbTrendingUp className="text-primary/40 text-4xl" />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
            {label}
          </p>
          <h3 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter group-hover:text-primary transition-colors duration-300">
            {value}
          </h3>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-700" />
    </div>
  );
}

StatsCard.propTypes = {
  delay: PropTypes.number,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
