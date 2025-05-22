import PropTypes from "prop-types";
import { motion } from "framer-motion";
export default function Project({ data }) {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[90%] text-sm flex items-center justify-center flex-col gap-5 md:flex-row md:text-base md:justify-between hover:bg-blue-950 transition-all p-4 rounded-xl min-h-[100px] cursor-pointer"
    >
      <div>
        <img
          src={data.img}
          alt={data.name}
          className="rounded-xl min-w-[70%] mx-auto md:w-[50%]"
        />
      </div>
      <div className="text-center md:text-right">
        <p>{data.name}</p>
        <a href={data.url} className="text-primary font-bold">
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
