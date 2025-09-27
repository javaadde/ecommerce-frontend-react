
function Category(){


    return(<>
    
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 font-comfortaa">
            {/* <!-- Jackets --> */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://image.hm.com/assets/hm/b3/ab/b3abf117b289954eb77743de13b759ba30a5f143.jpg?imwidth=1260"
                    alt="Jackets"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                    {/* have to add a icon */}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-comfortaa font-semibold text-black mb-1">
                    Jackets
                  </h4>
                  <p className="text-sm text-gray-500 font-comfortaa">
                    Premium outerwear
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- T-Shirts --> */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://image.hm.com/assets/hm/5f/6e/5f6e7e82097ef4b71cd3133e12fc401c5943bc6c.jpg?imwidth=1260"
                    alt="T-Shirts"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                    {/* have to add a icon */}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-black mb-1">T-Shirts</h4>
                  <p className="text-sm text-gray-500">Essential basics</p>
                </div>
              </div>
            </div>

            {/* <!-- Shirts --> */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://image.hm.com/assets/hm/ca/84/ca8423bef1118e7149d56dec14cb734adc13915e.jpg?imwidth=1260"
                    alt="Shirts"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                    {/* have to add a icon */}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-black mb-1">Shirts</h4>
                  <p className="text-sm text-gray-500">Formal & casual</p>
                </div>
              </div>
            </div>

            {/* <!-- Hoodies --> */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://image.hm.com/assets/hm/20/10/201059761c0999520a046c4c76046cee7c467fa2.jpg?imwidth=1260"
                    alt="Pants"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                    {/* have to add a icon */}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-black mb-1">Hoodies</h4>
                  <p className="text-sm text-gray-500">Tailored fits</p>
                </div>
              </div>
            </div>

            {/* <!-- Jeans --> */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://image.hm.com/assets/hm/5e/0d/5e0d6de907abd3a92cb89ae185a20dd347100206.jpg?imwidth=1260"
                    alt="Jeans"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center none">
                    {/* have to add a icon */}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-black mb-1">Jeans</h4>
                  <p className="text-sm text-gray-500">Denim classNameics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>)
}

export default Category