import React, { useEffect, useState } from "react";
import { Bulb, DesktopBg } from "../assets";
import BulletItem from "../components/BulletItem";
import Button from "../components/Button";
import Chip from "../components/Chip";
import Dropdown from "../components/Dropdown";
import FeedbackCard from "../components/FeedbackCard";
import { chips, roadmapList, sortByCategory } from "../utilities/constants";

function Home() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Voted");
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setFeedbackData(res.productRequests);
          setLoading(false);
          setError(false);
        })
        .catch((err) => {
          setLoading(false);
          setError("Oops, Something went wrong. Please try again later.");
        });
    };
    getData();
  }, []);

  return (
    <div className="flex w-full gap-8">
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
            <a
              href="/view"
              className="text-xs font-semibold text-blue underline">
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
      <div className="w-3/4">
        <div className="bg-dark-blue h-[72px] rounded-lg flex justify-between items-center p-4">
          <div className="flex justify-between items-center gap-3">
            <Bulb />
            <h2 className="text-lg text-white font-bold">6 Suggestions</h2>
            <Dropdown
              sortBy={sortBy}
              setSortBy={setSortBy}
              options={sortByCategory}
              btnText={
                <>
                  Sort by :{" "}
                  <span className="text-sm text-white">Most Upvotes</span>
                </>
              }
            />
          </div>
          <Button text="+ Add FeedBack" color="violet" bg />
        </div>
        <div>
          {loading ? (
            <div className="h-[75vh] w-full bg-white rounded-lg mt-4 flex justify-center items-center text-center">
              <p className="text-4xl text-dark-grey">Loading...</p>
            </div>
          ) : error ? (
            <div className="h-[75vh] w-full bg-white rounded-lg mt-4 flex justify-center items-center text-center">
              <p className="text-4xl text-dark-grey">
                Something went wrong :(
                <br />
                {error}
              </p>
            </div>
          ) : (
            feedbackData.map((feedback) => (
              <FeedbackCard key={feedback.id} data={feedback} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
