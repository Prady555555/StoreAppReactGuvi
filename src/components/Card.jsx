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
  const smallTitle = title.replace(/(\r\n|\n|\r)/gm, " ").substring(0, 10);

  return (
    <>
      <div className="grid grid-cols-4 items-center justify-center mt-10 mx-6 max-md:mx-2 max-md:gap-4 border-2 rounded-xl shadow-xl  ">
        <img src={img} className=" w-24 h-24  max-md:w-14 max-md:h-24" />
        <h1 className=" max-md:hidden font-['K2D']">{limitedTitle}...</h1>
        <h1 className=" md:hidden font-['K2D']">{smallTitle}..</h1>
        <h2>{price}</h2>
        <button
          className="bg-[#960037] p-4 rounded-xl text-[#fdfdfd] text-[20px] font-bold font-['K2D'] cursor-pointer max-md:text-[10px]"
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
