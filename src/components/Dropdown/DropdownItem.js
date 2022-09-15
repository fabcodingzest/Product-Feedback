import React from 'react'
import { Tick } from '../../assets';

const DropdownItem = ({ text, active, setActive }) => {
  console.log(active);
  console.log(setActive);
  const isActive = active === text;
  return (
    <button
      className={`bg-white w-full text-left p-2 border-[1px] first:rounded-t-lg last:rounded-b-lg  hover:text-violet ${
        isActive ? "flex justify-between items-center text-violet" : "block"
      }`}
      onClick={() => setActive(text)}>
      {text} {isActive && <Tick className="mr-2" />}
    </button>
  );
};

export default DropdownItem