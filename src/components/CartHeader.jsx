import React from "react";

const CartHeader = ({ setCartOpen, cartOpen }) => {
  return (
    <div className="flex justify-end mx-6 mt-4">
      <button
        className="bg-[#960037] p-4 rounded-xl text-[#fdfdfd] text-[20px] font-bold font-['K2D'] cursor-pointe"
        onClick={() => {
          setCartOpen(!cartOpen);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default CartHeader;
