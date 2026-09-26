import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "@constants/motion";

export default function Project({ data, priority = false }) {
  return (
    <motion.article variants={fadeUp} className="h-full">
      <Link
        to={`/proyectos/${data.slug}`}
        className="group card flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:shadow-[0_20px_50px_-20px_rgb(0_0_0/0.3)] active:scale-[0.985] active:duration-100"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
          <img
            src={data.img}
            alt={`Vista del proyecto ${data.name}`}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
          <p className="text-xs font-medium text-label-3">{data.client}</p>
          <h3 className="text-title text-label">{data.name}</h3>
          {data.context && (
            <p className="line-clamp-2 text-[0.9375rem] leading-relaxed text-label-2">
              {data.context}
            </p>
          )}
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
            {data.technologies?.slice(0, 3).map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    client: PropTypes.string,
    context: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  priority: PropTypes.bool,
};
