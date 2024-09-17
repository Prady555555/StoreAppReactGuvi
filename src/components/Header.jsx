import { FaCartShopping } from "react-icons/fa6";

const Header = ({ cart, setCartOpen, cartOpen }) => {
  return (
    <div>
      <FaCartShopping
        className="text-[#960037] w-24 h-10"
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      />
      <span>{cart}</span>
    </div>
  );
};

export default Header;
