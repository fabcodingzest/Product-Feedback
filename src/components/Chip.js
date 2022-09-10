const Chip = ({ text, filter, setFilter }) => {
  return (
    <div
      className={`text-sm font-medium px-4 py-1  bg-grey rounded-xl hover:bg-light-purple cursor-pointer ${
        filter && filter === text
          ? "bg-blue text-white hover:bg-blue"
          : "text-blue"
      } active:bg-blue active:text-white`}
      onClick={(e) => {
        setFilter(text);
      }}>
      {text}
    </div>
  );
};

export default Chip;
