import React, { useEffect, useState } from "react";
import { Bulb, EmptyIllustration } from "../assets";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import FeedbackCard from "../components/FeedbackCard";
import Sidebar from "../components/Sidebar";
import { sortByCategory } from "../utilities/constants";

function Home() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Most Voted");
  const [responseData, setResponseData] = useState({
    data: [],
    user: null,
    loading: false,
    error: "",
  });
  const { data, loading, error } = responseData;
  const [feedbacks, setFeedbacks] = useState(data);
  useEffect(() => {
    const getData = async () => {
      setResponseData((prev) => ({ ...prev, loading: true }));
      fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setResponseData({
            data: res.productRequests,
            user: res.currentUser,
            loading: false,
            error: false,
          });
          setFeedbacks(res.productRequests);
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
  const suggestions =
    feedbacks.filter((item) => item.status === "suggestion").length || 0;

  return (
    <div className="flex flex-col w-full gap-8 md:flex-row">
      <Sidebar
        filter={filter}
        setFilter={(item) => setFilter(item)}
        allFeedback={data}
        setFeedbacks={setFeedbacks}
      />
      <div className="w-full md:w-3/4">
        <div className="bg-dark-blue h-[72px] rounded-lg flex justify-between items-center p-4">
          <div className="flex justify-between items-center gap-3">
            <Bulb />
            <h2 className="text-lg text-white font-bold">
              {suggestions} Suggestions
            </h2>
            <Dropdown
              active={sortBy}
              setActive={setSortBy}
              options={sortByCategory}
              btnText={
                <div className="text-grey">
                  Sort by :{" "}
                  <span className="text-sm font-semibold">Most Upvotes</span>
                </div>
              }
            />
          </div>
          <Button text="+ Add Feedback" color="violet" bg />
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
          ) : feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} data={feedback} />
            ))
          ) : (
            <div className="h-[75vh] w-full bg-white rounded-lg mt-4 flex flex-col justify-center items-center text-center">
              <EmptyIllustration />
              <h1 className="text-3xl py-3 font-bold">
                There is no feedback yet.
              </h1>
              <h3 className="max-w-md text-sm text-dark-grey mb-8">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </h3>
              <Button text="+ Add Feedback" color="violet" bg />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
