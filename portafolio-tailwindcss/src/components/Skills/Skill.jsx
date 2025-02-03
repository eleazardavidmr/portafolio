import PropTypes from "prop-types";
import "./styles.css";
import { motion } from "framer-motion";
export default function Skill({ name, icon }) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center gap-3 rounded-xl p-4 backdrop-blur-2xl skill font-bold md:w-[300px]"
    >
      <span>{name}</span>
      <span>{icon}</span>
    </motion.span>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
