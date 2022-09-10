import React from "react";
import { ArrowLeft } from "../assets";
import { btnColors } from "../utilities/constants";

function Button({ bg, text, color, goBack }) {
  return (
    <button
      className={`${
        bg && !goBack
          ? `${btnColors[color]} text-white hover:opacity-70 px-5 py-2`
          : `${
              goBack && bg
                ? "bg-dark-blue text-white"
                : "bg-transparent text-dark-grey"
            } hover:underline px-7 py-3`
      } rounded-lg text-sm font-semibold flex items-center gap-3`}>
      {goBack && (
        <ArrowLeft className={`${bg && goBack ? "text-grey" : "text-blue"}`} />
      )}
      {text}
    </button>
  );
}

export default Button;
