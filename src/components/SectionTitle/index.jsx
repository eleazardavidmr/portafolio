import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeUp, stagger, revealOnView } from "@constants/motion";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className = "",
}) {
  const centered = align === "center";

  return (
    <motion.header
      variants={stagger(0.06)}
      {...revealOnView}
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center mx-auto" : "items-start"
      } max-w-3xl ${className}`}
    >
      {eyebrow && (
        <motion.p variants={fadeUp} className="text-eyebrow text-primary">
          {eyebrow}
        </motion.p>
      )}
      <motion.div variants={fadeUp}>
        <Heading className="text-headline text-label text-balance">
          {title}
        </Heading>
      </motion.div>
      {description && (
        <motion.p
          variants={fadeUp}
          className="text-lead text-label-2 text-pretty max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  align: PropTypes.oneOf(["left", "center"]),
  as: PropTypes.elementType,
  className: PropTypes.string,
};
