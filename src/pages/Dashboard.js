import React, { useEffect, useState } from "react";
import { Bulb } from "../assets";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import FeedbackCard from "../components/FeedbackCard";
import Sidebar from "../components/Sidebar";
import { sortByCategory } from "../utilities/constants";

function Home() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Voted");
  const [responseData, setResponseData] = useState({
    feedbacks: [],
    loading: false,
    error: "",
  });
  const { feedbacks, loading, error } = responseData;
  useEffect(() => {
    setResponseData((prev) => ({ ...prev, loading: true }));
    const getData = async () => {
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setResponseData({
            feedbacks: res.productRequests,
            loading: false,
            error: false,
          });
        })
        .catch((err) => {
          setResponseData((prev) => ({
            ...prev,
            loading: false,
            error: err.message,
          }));
        });
    };
    getData();
  }, []);
  console.log(feedbacks);
  const suggestions =
    feedbacks.filter((item) => item.status === "suggestion").length || 0;

  return (
    <div className="flex w-full gap-8">
      <Sidebar filter={filter} setFilter={setFilter} />
      <div className="w-3/4">
        <div className="bg-dark-blue h-[72px] rounded-lg flex justify-between items-center p-4">
          <div className="flex justify-between items-center gap-3">
            <Bulb />
            <h2 className="text-lg text-white font-bold">
              {suggestions} Suggestions
            </h2>
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
          ) : error.length > 0 ? (
            <div className="h-[75vh] w-full bg-white rounded-lg mt-4 flex justify-center items-center text-center">
              <p className="text-4xl text-dark-grey">
                Something went wrong :(
                <br />
                {error}
              </p>
            </div>
          ) : (
            feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} data={feedback} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
