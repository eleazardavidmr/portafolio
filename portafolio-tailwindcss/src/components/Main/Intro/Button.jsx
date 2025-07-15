import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, to }) => {
  return (
    <div className="rounded-md backdrop-blur-md items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] w-full">
      <button className="px-5 py-2">
        <Link to={to}>{title}</Link>
      </button>
    </div>
  );
};

export default Button;
