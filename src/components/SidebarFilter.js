import React from "react";
import { chips } from "../utilities/constants";
import Chip from "./Chip";

function SidebarFilter({ filter, setFilter, allFeedback, setFeedbacks }) {
  return (
    <div>
      <div className="bg-white font-bold flex p-4 rounded-lg flex-wrap gap-x-2 gap-y-3">
        {chips.map((item) => (
          <Chip
            text={item}
            key={item}
            filter={filter}
            onClick={() => {
              setFilter(item);
              const filteredArr = allFeedback.filter(
                (feedback) => feedback.category === item.toLowerCase()
              );
              item === "All"
                ? setFeedbacks(allFeedback)
                : setFeedbacks(filteredArr);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SidebarFilter;
