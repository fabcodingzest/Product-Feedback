const BulletItem = ({ data: { text, color, item } }) => {
  return (
    <div className="flex justify-between items-center text-dark-grey py-1">
      <p className="flex items-center">
        <span
          className={`inline-block w-2 h-2 rounded-full ${color}  mr-4`}></span>
        {text}
      </p>
      {item && <p className="font-bold">{item}</p>}
    </div>
  );
};

export default BulletItem;
