import PropTypes from "prop-types";
import "./styles.css";
import { motion } from "framer-motion";
export default function Social({ name, icon, to }) {
  return (
    <motion.a
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      whileHover={{ scale: 1.03 }}
      href={to}
      target="_blank"
      className="social p-5 flex items-center justify-center flex-col rounded-3xl w-[200px] hover:shadow-xl transition-shadow"
    >
      {icon}
      <p className="text-white/60">{name}</p>
    </motion.a>
  );
}

Social.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};
