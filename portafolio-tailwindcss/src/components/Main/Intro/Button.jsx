import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="px-2 py-2 rounded-md backdrop-blur-md items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] w-full"
    >
      {title}
    </Link>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
