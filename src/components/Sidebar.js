import React from "react";
import { DesktopBg } from "../assets";
import { roadmapList } from "../utilities/constants";
import BulletItem from "./BulletItem";
import SidebarFilter from "./SidebarFilter";

function Sidebar({ filter, setFilter, allFeedback, setFeedbacks }) {
  return (
    <div className="w-1/4 flex flex-col gap-6">
      <div className="relative text-white rounded-lg overflow-hidden">
        <img className="object-cover h-full w-full" src={DesktopBg} alt="" />
        <div className="absolute bottom-4 left-4 text-left w-full">
          <h1 className="font-bold">Frontend Mentor</h1>
          <h3 className="text-sm font-medium opacity-75">Feedback Board</h3>
        </div>
      </div>
      <SidebarFilter
        filter={filter}
        setFilter={setFilter}
        allFeedback={allFeedback}
        setFeedbacks={setFeedbacks}
      />
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
