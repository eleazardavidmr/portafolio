import React from "react";

const Card = () => {
  return (
    <div className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6 hover:translate-y-12 md:w-[40%] mt-5 mb-10">
      <div className="group-hover:duration-400 relative rounded-2xl w-64 h-36 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12 before:rounded-2xl before:absolute before:content[''] before:bg-neutral-700 before:right-3 before:top-0 before:w-64 before:h-32 before:-z-10">
        <span className="text-5xl font-bold">Jr</span>
        <p className="text-primary">- Frontend Developer -</p>
      </div>
    </div>
  );
};

export default Card;
