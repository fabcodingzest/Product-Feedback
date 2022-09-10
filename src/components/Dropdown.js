import React, { useState } from "react";
import { ArrowUp, Tick } from "../assets";

const DropdownItem = ({ text, sortBy, setSortBy }) => {
  const isActive = sortBy === text;
  return (
    <button
      className={`bg-white w-full text-left p-2 border-[1px] first:rounded-t-lg last:rounded-b-lg  hover:text-violet ${
        isActive ? "flex justify-between items-center text-violet" : "block"
      }`}
      onClick={() => setSortBy(text)}>
      {text} {isActive && <Tick className="mr-2" />}
    </button>
  );
};

function Dropdown({ btnText, options, sortBy, setSortBy }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative filter pl-2">
      <button
        className="relative z-10 bg-transparent text-xs text-grey cursor-pointer flex justify-between items-center gap-1 w-full"
        onClick={toggleDropdown}>
        {btnText}
        <ArrowUp />
      </button>
      <button
        onClick={() => setDropdownOpen(false)}
        className={`fixed inset-0 h-full w-full bg-transparent cursor-default ${
          dropdownOpen ? "block" : "hidden"
        }`}
      />
      <div
        className={`absolute mt-8 ml-1 w-[225px] text-sm text-dark-grey ${
          dropdownOpen ? "block" : "hidden"
        }`}>
        {options.map((item) => (
          <DropdownItem
            key={item}
            text={item}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
