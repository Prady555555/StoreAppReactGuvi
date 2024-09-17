import { FaCartShopping } from "react-icons/fa6";

const Header = ({ cart, setCartOpen, cartOpen }) => {
  return (
    <div className="relative">
      <FaCartShopping
        className="text-[#960037] w-24 h-10"
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      />
      <span className=" text-[#960037] absolute top-2  font-bold">{cart}</span>
    </div>
  );
};

export default Header;
