import React from "react";
import { ArrowUp } from "../assets";

function UpVotes({ upvotes, vertical }) {
  return (
    <div
      className={`flex items-center justify-center bg-grey p-2.5 w-min self-start rounded-lg ${
        vertical ? "flex-col" : ""
      } `}>
      <ArrowUp className="text-blue" />
      <p
        className={`text-xs font-bold text-darker-blue ${
          vertical ? "mt-2" : "ml-1.5"
        }`}>
        {upvotes || 0}
      </p>
    </div>
  );
}

export default UpVotes;
