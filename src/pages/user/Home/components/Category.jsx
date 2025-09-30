import { useEffect, useState } from "react";
import axios from "../../../../axios";

function category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <!-- Categories Bar--> */}
      <section className="py-16 bg-soft-gray bg-gray-300" id="category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- headding --> */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-michroma font-bold text-black mb-4">
              SHOP BY CATEGORY
            </h3>
            <p className="text-gray-600 font-comfortaa max-w-2xl mx-auto">
              Explore our carefully curated collections, each designed to
              elevate your wardrobe with timeless pieces.
            </p>
          </div>

          {/* <!-- Categories Grid --> */}

          <div className="flex flex-wrap justify-center items-center gap-6 font-comfortaa">
            {category.map((cate, index) => {
              return (
                <div key={index} className="group w-[16%] cursor-pointer">
                  <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                    <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                      <img
                        src={cate.url}
                        alt={cate.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                        {/* have to add a icon */}
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="font-comfortaa font-semibold text-black mb-1">
                        {cate.name}
                      </h4>
                      <p className="text-sm text-gray-500 font-comfortaa">
                        {cate.discription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default category;
