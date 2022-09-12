import React from "react";
import { DesktopBg } from "../assets";
import { chips, roadmapList } from "../utilities/constants";
import BulletItem from "./BulletItem";
import Chip from "./Chip";

function Sidebar({ filter, setFilter }) {
  return (
    <div className="w-1/4 flex flex-col gap-6">
      <div className="relative text-white rounded-lg overflow-hidden">
        <img className="object-cover h-full w-full" src={DesktopBg} alt="" />
        <div className="absolute bottom-4 left-4 text-left w-full">
          <h1 className="font-bold">Frontend Mentor</h1>
          <h3 className="text-sm font-medium opacity-75">Feedback Board</h3>
        </div>
      </div>
      <div className="bg-white font-bold flex p-4 rounded-lg flex-wrap gap-x-2 gap-y-3">
        {chips.map((item) => (
          <Chip
            text={item}
            key={item}
            filter={filter}
            onClick={() => setFilter(item)}
          />
        ))}
      </div>
      <div className="bg-white px-6 py-3 rounded-lg">
        <div className="flex justify-between items-center pb-2">
          <p className="text-md font-bold">Roadmap</p>
          <a href="/view" className="text-xs font-semibold text-blue underline">
            View
          </a>
        </div>
        <div>
          {roadmapList.map((item) => (
            <BulletItem key={item.text} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
