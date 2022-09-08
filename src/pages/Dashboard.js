import React from "react";
import { ArrowUp, Bulb, DesktopBg, Tick } from "../assets";

const chips = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
const roadmaps = [
  { text: "Planned", color: "orange", item: 2 },
  { text: "In-progress", color: "violet", item: 3 },
  { text: "Live", color: "light-blue", item: 1 },
];

const Chip = ({ text }) => {
  return (
    <div
      className={`text-sm font-medium px-4 py-1  bg-grey rounded-xl hover:bg-light-purple cursor-pointer ${
        text === "All" ? "bg-blue text-white" : "text-blue"
      } active:bg-blue active:text-white`}>
      {text}
    </div>
  );
};

const RoadMapItem = ({ data: { text, color, item } }) => {
  return (
    <div className="flex justify-between items-center text-dark-grey py-1">
      <p className="flex items-center">
        <span
          className={`inline-block w-2 h-2 rounded-full bg-${color} mr-4`}></span>
        {text}
      </p>
      <p className="font-bold">{item}</p>
    </div>
  );
};

function Home() {
  return (
    <div className="flex w-full gap-8">
      <div className="w-1/4 flex flex-col gap-6">
        {/* <div> */}
        <div className="relative text-white rounded-lg overflow-hidden">
          <img className="object-cover h-full w-full" src={DesktopBg} alt="" />
          <div className="absolute bottom-4 left-4 text-left w-full">
            <h1 className="font-bold">Frontend Mentor</h1>
            <h3 className="text-sm font-medium opacity-75">Feedback Board</h3>
          </div>
        </div>
        <div className="bg-white font-bold flex p-4 rounded-lg flex-wrap gap-x-2 gap-y-3">
          {chips.map((item) => (
            <Chip text={item} key={item} />
          ))}
        </div>
        <div className="bg-white px-6 py-3 rounded-lg">
          <div className="flex justify-between items-center pb-2">
            <p className="text-md font-bold">Roadmap</p>
            <a
              href="/view"
              className="text-xs font-semibold text-blue opacity-80 underline">
              View
            </a>
          </div>
          <div>
            {roadmaps.map((item) => (
              <RoadMapItem key={item.text} data={item} />
            ))}
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="bg-dark-blue w-3/4 h-[72px] rounded-lg flex justify-between items-center p-4">
        <div className="flex justify-between items-center gap-3">
          <img className="text-white" src={Bulb} alt="suggestion icon" />
          <h2 className="text-lg text-white font-bold">6 Suggestions</h2>
          <div className="filter pl-2">
            <button className="bg-transparent text-xs text-grey">
              Sort by :{" "}
              <span className="text-sm inline-flex justify-start items-center gap-1">
                Most Upvotes <img src={ArrowUp} alt="" />
              </span>
            </button>
            <div className="absolute mt-6 ml-1 w-[225px] text-sm text-dark-grey ">
              <button className="bg-white w-full text-left p-2 border-[1px] rounded-t-lg flex justify-between items-center text-violet hover:text-violet">
                Most Votes <img className="pr-2" src={Tick} alt="check mark" />
              </button>
              <button className="block bg-white w-full text-left p-2 border-[1px] hover:text-violet">
                Least Votes
              </button>
              <button className="block bg-white w-full text-left p-2 border-[1px] hover:text-violet">
                Most Comments
              </button>
              <button className="block bg-white w-full text-left p-2 border-[1px] rounded-b-lg hover:text-violet">
                Least Comments
              </button>
            </div>
          </div>
        </div>
        <button className="bg-violet rounded-lg text-white px-4 py-2 text-sm font-semibold">
          + Add Feedback
        </button>
      </div>
    </div>
  );
}

export default Home;
