import { useEffect, useState } from "react";
import axios from "../../../axios";
import Items from "./Items";
import { Link } from "react-router-dom";
import States from "./States";

function Main() {
  const [isEmpty, setIsEmpty] = useState();

  useEffect(() => {
    const fetchCart = async () => {
      axios.get("/cart").then((res) => {
        const items = res.data.items;
        if (items.length <= 0) {
          setIsEmpty(true);
        }
      });
    };

    fetchCart();
  }, []);

  return isEmpty ? (
    <>
      {" "}
      <div id="emptyCart" className=" p-12 text-center">
        <svg
          className="w-16 h-16 text-gray-300 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5.4a1 1 0 001 1.2h9.2a1 1 0 001-1.2L15.5 8M7 13v8a2 2 0 002 2h6a2 2 0 002-2v-8"
          ></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-500 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-400 mb-4">Add some products to get started</p>
        <Link to="/products">
          <button className="px-6 py-3 bg-black cursor-pointer  text-white rounded-lg hover:bg-white hover:text-black border-1 transition-colors font-medium">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="grid lg:grid-cols-2">
        {/* ITEMS CONTAINER */}
        <div className="p-3">
          <Items />
        </div>
        <States />
      </div>
    </>
  );
}

export default Main;
