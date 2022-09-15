import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "../../assets";
import DropdownItem from "./DropdownItem";

function Dropdown({ btnText, options, active, setActive }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative filter pl-2">
      <button
        className="relative z-10 text-xs text-grey cursor-pointer flex justify-between items-center gap-1 w-full"
        onClick={toggleDropdown}>
        {btnText}
        {dropdownOpen ? <ArrowUp /> : <ArrowDown />}
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
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
