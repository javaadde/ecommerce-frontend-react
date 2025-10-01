import Pro from "./pro";
import axios from "../../../../axios";
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

  const showSearchResult = (value) => {
    
    axios.post(`/products/search?name=${value}`)
    .then((res)=>{
      setProducts(res.data)
    })
    .catch((err) => console.log(err))
  }

  return (
    <>
      <div
        className="h-[25vh] lg:h-[15vh] w-full flex lg:text-2xl text-sm font-comfortaa
       bg-gray-200 border-b-1 shadow-2xl border-gray-300 rounded-b-2xl"
      >
        {/* search by text */}

        <div className="w-[50%] lg:w-1/2 h-full flex lg:justify-start flex-row lg:ml-15 justify-center items-center">
          <Link to="/">
            <button className="text-2xl cursor-pointer px-4 lg:hidden">
              <i className="fa-solid fa-house"></i>
            </button>
          </Link>

          <Link to="/">
            <div className="text-xl cursor-pointer px-4 hover:scale-105 hover:font-extrabold hidden lg:flex">
              <h1 className="text-black">Home</h1>
            </div>
          </Link>

          <div className="ml-28 py-3 rounded-l-2xl px-4 text-xl bg-gray-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="felx flex-row  items-center justify-center">
            <input
              onChange={(e)=>{showSearchResult(e.target.value)}}
              type="text"
              className="py-3 px-5 text-xl bg-gray-300 rounded-r-xl outline-0"
              placeholder="Search"
            />
          </div>
        </div>

        {/* search by categories */}

        <div className="md:w-[60%] w-[30%] lg:w-1/2 h-full">
          <div className="w-full h-full text-xl flex flex-row gap-4 py-8 justify-center px-10 items-center font-michroma">
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
                <option key={index} value={catg.name}>
                  {catg.name}
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
