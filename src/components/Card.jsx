const Card = ({
  title,
  price,
  img,
  setCartOpen,
  cartOpen,
  res,
  deleteItem,
}) => {
  const limitedTitle = title.replace(/(\r\n|\n|\r)/gm, " ").substring(0, 30);

  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center mt-10 mx-6 ">
        <img src={img} className=" w-24 h-24" />
        <h1>{limitedTitle}...</h1>
        <h2>{price}</h2>
        <button
          className="bg-[#960037] p-4 rounded-xl text-[#fdfdfd] text-[20px] font-bold font-['K2D'] cursor-pointer"
          onClick={() => {
            deleteItem(res);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Card;
