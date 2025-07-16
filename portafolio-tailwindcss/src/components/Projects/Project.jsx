import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./styles.css";
export default function Project({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      className="project p-8 md:h-[260px] rounded-3xl flex items-center justify-between flex-col cursor-pointer mt-5 mx-3 hover:shadow-xl"
    >
      <div>
        <img src={data.img} alt={data.name} className="mx-auto w-[18vw]" />
      </div>
      <div className="p-2 mt-8 text-center w-full">
        <p className="text-xl font-semibold">{data.name}</p>
        <a href={data.url} className="text-white-light underline">
          {data.urlName}
        </a>
      </div>
    </motion.div>
  );
}

Project.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlName: PropTypes.string.isRequired,
  }).isRequired,
};
