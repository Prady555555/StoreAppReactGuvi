const MainContainer = ({ title, img, price, res, handle, ind }) => {
  const limitedTitle = title.replace(/(\r\n|\n|\r)/gm, " ").substring(0, 15);
  limitedTitle.toLowerCase();

  return (
    <div className=" flex flex-col items-center p-6  bg-white rounded-2xl   ">
      <img src={img} className="w-40 h-40 object-contian" />
      <div className=" text-center pt-3 text-[25px] font-extrabold font-['K2D']">
        {limitedTitle}.........
      </div>
      <div className=" text-center pt-3 pb-3 font-['K2D'] font-extrabold text-[#960037] text-[32px]">
        $ {price}
      </div>
      <div
        className="bg-[#960037] p-4 rounded-xl text-[#fdfdfd] text-[20px] font-bold font-['K2D'] cursor-pointer"
        onClick={() => handle(res)}
      >
        ADD TO CART
      </div>
    </div>
  );
};

// MainContainer.propTypes = {
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default MainContainer;
