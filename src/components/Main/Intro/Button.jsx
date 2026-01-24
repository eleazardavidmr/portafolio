import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ title, to }) => {
  return (
    <Link
      to={to}
      className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/20 flex items-center justify-center min-w-[180px]"
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
