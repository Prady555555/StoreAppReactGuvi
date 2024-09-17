import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { useEffect } from "react";
import Card from "./components/Card";
import CartHeader from "./components/CartHeader";

function App() {
  // const take = fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // const briliant = useEffect(() => {
  //   async function call() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //   }
  //   return call;
  // }, []);
  const [count, setCount] = useState([]);
  const [cart, setCart] = useState([]);
  const [warn, setWarn] = useState(false);
  const [cartOpen, setCartOpen] = useState(true);

  const url = "https://fakestoreapi.com/products";
  async function briliant() {
    const res = await fetch(url);
    const data = await res.json();
    setCount(data);
  }

  useEffect(() => {
    briliant();
  }, []);

  useEffect(() => {
    if (warn) {
      setTimeout(() => {
        setWarn(false);
      }, 3000);
    }
  }, [warn]);

  function handleClick(item) {
    let isPresent = false;
    cart.map((res) => (res.id === item.id ? (isPresent = true) : null));
    isPresent ? setWarn(true) : setCart([...cart, item]);
  }

  function deleteItem(id) {
    let del = cart.filter((res) => res.id !== id.id);
    setCart(del);
  }

  return (
    <>
      {cartOpen ? (
        <>
          <div className="flex justify-end items-center  bg-[#232121]  pb-8 pt-8  px-6">
            <Header
              cart={cart.length}
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
            />
          </div>
          <div className=" sticky">
            {warn && <div className="text-red-600">Item already in cart</div>}
          </div>
          <div className="flex justify-center items-end min-h-screen bg-gray-200  pb-8 pt-8  px-6 ">
            <div className="grid grid-cols-4 gap-24 max-lg:gap-8 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-2  ">
              {count.map((res, ind) => (
                <MainContainer
                  res={res}
                  key={ind}
                  title={res.title}
                  img={res.image}
                  price={res.price}
                  handle={handleClick}
                  ind={ind}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>
          <CartHeader setCartOpen={setCartOpen} cartOpen={cartOpen} />
          {cart.length === 0 ? (
            <div className="text-center text-[30px]">No items in cart</div>
          ) : (
            cart.map((res, i) => (
              <Card
                key={i}
                title={res.title}
                img={res.image}
                price={res.price}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
                res={res}
                deleteItem={deleteItem}
              />
            ))
          )}
        </div>
      )}
    </>
  );
}

export default App;
