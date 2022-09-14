import React from "react";
import { ArrowUp } from "../assets";

function UpVotes({ upvotes, vertical }) {
  return (
    <div
      className={`group flex items-center justify-center bg-grey p-2.5 w-min self-start rounded-lg ${
        vertical ? "flex-col" : ""
      } hover:bg-light-purple active:bg-blue cursor-pointer`}>
      {/* Need to add onClick to handle upvoting and change styles for active ones */}
      <ArrowUp className="text-blue group-active:text-white " />
      <p
        className={`text-xs font-bold text-darker-blue group-active:text-white ${
          vertical ? "mt-2" : "ml-1.5"
        }`}>
        {upvotes || 0}
      </p>
    </div>
  );
}

export default UpVotes;
