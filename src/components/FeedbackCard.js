import React from "react";
import { ArrowUp, Comment } from "../assets";
import Chip from "./Chip";
import UpVotes from "./UpVotes";

function FeedbackCard({
  data: { title, category, upvotes, status, description, comments },
}) {
  return (
    <div className="flex just-between gap-8 bg-white my-5 px-8 py-6 rounded-lg">
      <UpVotes upvotes={upvotes} vertical/>
      <div className="flex justify-between items-center w-full">
        <div>
          <h5 className="text-lg font-bold text-darker-blue">{title}</h5>
          <p className="text-sm text-dark-grey">{description}</p>
          <div className="w-min pt-2">
            <Chip
              text={
                category[0].toUpperCase() + category.split("").slice(1).join("")
              }
            />
          </div>
        </div>
        {/* this needs to be converted into links for pointer cursor */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Comment />
          <p className="text-sm font-bold text-dark-grey">
            {comments?.length || 0}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
