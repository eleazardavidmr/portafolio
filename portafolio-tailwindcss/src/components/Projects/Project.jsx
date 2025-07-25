import PropTypes from "prop-types";
import "./styles.css";
export default function Project({ data }) {
  return (
    <a
      href={data.url}
      className="project p-8 rounded-3xl flex items-center justify-center flex-col cursor-pointer hover:scale-[1.02] hover:shadow-2xl w-full h-full transition-all"
    >
      <div>
        <img src={data.img} alt={data.name} className="mx-auto w-[80%]" />
      </div>
      <div className="p-2 mt-8 text-center w-full">
        <p className="text-xl font-semibold">{data.name}</p>
        <a href={data.url} className="text-white-light underline">
          {data.urlName}
        </a>
      </div>
    </a>
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
