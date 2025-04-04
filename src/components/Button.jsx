import React from "react";
import RevealLink from "./RevealLink";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} `}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>
        <RevealLink>
            {title}

        </RevealLink>
          </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
