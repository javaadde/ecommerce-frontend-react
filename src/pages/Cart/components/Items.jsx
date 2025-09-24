import { useEffect, useState } from "react";
import axios from "../../../axios";
import showNotification from "../../../notification.mjs";
import { createContext } from "react";

export const UpdaterCart = createContext();

function Items() {
  let [update, setUpdate] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      axios.get("/cart").then((res) => {
        const items = res.data.items;
        setCartItems(items);
      });
    };

    fetchCart();
  }, [update]);

  const increaseItemQty = (id) => {
    axios
      .patch(`/cart/quantity/increase?id=${id}`)
      .then((res) => {
        const problem = res.data.problem;
        const message = res.data.message;
        if (problem) {
          showNotification(message);
        }
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  const decreaseItemQty = (id) => {
    axios
      .patch(`/cart/quantity/decrease?id=${id}`)
      .then((res) => {
        const problem = res.data.problem;
        const message = res.data.message;
        if (problem) {
          showNotification(message);
        }
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  const deleteCartItem = (id) => {
    axios
      .delete(`/cart/delete/${id}`)
      .then((res) => {
        console.log(res);
        const message = res.data.message;
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, [update]);

  return (
    <>
    <UpdaterCart.Provider value={update}> </UpdaterCart.Provider>
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="p-6 flex items-center  shadow-xl rounded-b-md font-comfortaa"
        >
          <img
            src={item.url}
            alt="product image"
            className="w-[25vh] h-45 rounded-lg object-cover bg-soft-gray"
          />

          <div className="flex-1 pl-12">
            <h3 className="text-lg font-semibold text-black mb-1">
              {item.name}
            </h3>
            <p className="text-dark-gray text-sm">{item.price}</p>
          </div>

          <div className="flex items-center gap-6">
            {/* <!-- Quantity Controls --> */}
            <div className="flex items-center space-x-2 bg-soft-gray rounded-lg">
              <button
                onClick={() => {
                  decreaseItemQty(item.product_id);
                }}
                className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-square-minus"></i>
              </button>

              <span className="px-3 py-1 text-black font-medium min-w-[2rem] text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => {
                  increaseItemQty(item.product_id);
                }}
                className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-square-plus"></i>
              </button>
            </div>

            {/* <!-- Item Total --> */}
            <div className="text-right min-w-[4rem]">
              <p className="text-lg font-semibold text-black">
                {item.price * item.quantity}
              </p>
            </div>

            {/* <!-- Remove Button --> */}
            <button
              onClick={() => {
                deleteCartItem(item.product_id);
              }}
              className="p-2 cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              title="delete cart item"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
   
  </>);
}

export default Items;
