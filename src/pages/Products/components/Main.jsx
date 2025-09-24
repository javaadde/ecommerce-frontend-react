import Pro from "./pro";
import axios from "../../../axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCtegory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      axios
        .get("/products")
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchAllCategories = () => {
      axios
        .get("/category")
        .then((res) => {
          setAllCtegory(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchProducts();
    fetchAllCategories();
  }, []);

  useEffect(() => {
    const fetchByCat = async () => {
      axios.get(`/products/${category}`).then((res) => {
        setProducts(res.data);
      });
    };

    fetchByCat();
  }, [category]);

  return (
    <>
      <div
        className="h-[25vh] lg:h-[15vh] w-full flex lg:text-2xl text-sm font-comfortaa
       bg-gray-200 border-b-1 shadow-2xl border-gray-300 rounded-b-2xl"
      >
        {/* search by text */}

        <div className="w-[35%] lg:w-1/2 h-full flex lg:justify-start flex-row lg:ml-15 justify-center items-center">
        <Link to="/">
        <button className="text-2xl cursor-pointer px-4 ">
            <i className="fa-solid fa-house"></i>
        </button>
        </Link>

        <div className="lg:flex md:flex hidden">


        <Link to="/cart">
        <button className="text-2xl cursor-pointer px-4">
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
        </Link>

        <Link to="/settings">
        <button className="text-2xl cursor-pointer px-4">
            <i className="fa-solid fa-user-circle"></i>
        </button>
        </Link>
        </div>

        </div>

        {/* search by categories */}

        <div className="md:w-[60%] w-[30%] lg:w-1/2 h-full">
          <div className="w-full h-full flex flex-row gap-4 py-8 justify-center px-10 items-center font-michroma">
            <h2>Filter By Category&nbsp;:</h2>

            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              id="category"
              name=""
              className="p-2 px-8 rounded-full border-black border-2 "
            >
              <option value="">All</option>
              {allCategory.map((catg, index) => (
                <option key={index} value={catg._id}>
                  {catg._id}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="h-full px-8 py-12 flex flex-wrap gap-8 items-center justify-center">
        {products.map((pro, index) => (
          <Pro
            key={index}
            name={pro.name}
            url={pro.url}
            category={pro.category_id}
            proId={pro._id}
          />
        ))}
      </div>
      ;
    </>
  );
}

export default Main;
