import { Link } from "react-router-dom"

function Home() {


    const openNav = () => {
        document.getElementById("navbar").classList.remove("translate-x-full")
    }
    
    const closeNav = () => {
        document.getElementById("navbar").classList.add("translate-x-full")
    }

    


  return (
    <div className="min-h-screen w-full">
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* <!-- Logo --> */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-michroma font-bold text-black">
                JD
              </h1>
            </div>

            {/* <!-- Navigation --> */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="http://localhost:5000/products"
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-comfortaa font-medium transition-colors duration-200"
              >
                Products
              </a>
              <a
                href="#category"
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-comfortaa font-medium transition-colors duration-200"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-600 px-3 py-2 text-sm font-comfortaa font-medium transition-colors duration-200"
              >
                Customer Support
              </a>
            </nav>

            {/* <!-- Auth Buttons --> */}
            <div className="flex items-center space-x-4 gap-5">
              <button className="font-bold text-2xl hover:text-gray-700 cursor-pointer">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <Link to="/settings">
              <button className="text-2xl hover:text-gray-700 cursor-pointer">
                <i className="fa-solid fa-circle-user"></i>
              </button>
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden">
              <button onClick={openNav} className="text-black text-2xl cursor-pointer hover:text-gray-600">
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>

          </div>
        </div>
      </header>

            {/* mobile navbar */}

      <div id="navbar" className="h-full w-1/2 fixed bg-white z-99 translate-x-full transition-all ease-in top-0 right-0">
        <div>
          <button onClick={closeNav} className="text-black absolute left-3 top-3 px-3 py-2 border-1 hover:bg-black hover:text-white rounded cursor-pointer shadow-2xl">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="w-full mt-20 flex items-center justify-center font-comfortaa">
          <ul className="text-black w-full">
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href=""></a>Home
            </li>        
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href="">Products</a>
            </li>        
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href="">Categories</a>
            </li>        
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href="">Orders</a>
            </li>        
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href="">Cart</a>
            </li>        
            <li className="p-2 cursor-pointer bg-white hover:bg-black hover:text-white hover:border-black text-center border-y py-3 w-full transition-[0.5s] ease-in">
              <a href="">Settings</a>
            </li>        
          </ul>
        </div>
      </div>

      {/* <!-- Hero Section --> */}
      <section className="relative bg-gray-200 py-8 lg:py-13 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* <!-- Model Image - Front and Center --> */}

            {/* <!-- big sreen --> */}
            <div className="order-1 lg:order-1 justify-center lg:flex hidden">
              <img
                src="https://image.hm.com/assets/hm/de/74/de74869d8c461f1455bb800621bf4a38be9d8030.jpg?imwidth=1260"
                alt="Fashion Model - Monochrome Style"
                className="w-80 h-96 lg:w-76 lg:h-[100%] object-cover rounded-2xl shadow-2xl hover:scale-102 transition-all ease-in"
              />
            </div>

            {/* <!-- small screen --> */}
            <div className="order-1 lg:order-1 lg:hidden flex">
              <img
                src="https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltdc40d5eb2bc08aff/68b16ff8c5c65564baa420f2/LANDING-BEST_SELLERS.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(2332.5,1000)"
                alt="Fashion Model - Monochrome Style"
                className="w-[100%] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* <!-- Store Description --> */}
            <div className="order-2 lg:order-2 space-y-8 px-4">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-michroma font-bold text-black leading-tight">
                  TIMELESS
                  <span className="block bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent">
                    ELEGANCE
                  </span>
                </h2>
                <div className="w-24 h-1 bg-black"></div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-light font-comfortaa">
                  Discover the perfect balance of sophistication and comfort.
                  Our curated collection features premium fabrics, impeccable
                  tailoring, and designs that transcend seasons.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 font-michroma">
                <button className="bg-black text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-dark-gray transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Explore Collection</span>
                  {/* have to add a icon */}
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-black hover:text-white transition-all duration-200">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/*  Newsletter Section */}
      <section className="py-16 bg-black px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-michroma font-bold text-white mb-4">
            STAY IN STYLE
          </h3>
          <p className="text-gray-300 font-comfortaa mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive collections, and
            special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4 flex-wrap justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white outline-none font-comfortaa bg-gray-200"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-comfortaa font-medium hover:bg-gray-200 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="bg-dark-gray bg-black px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <!-- Bottom Bar --> */}
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-comfortaa">
              &copy; 2025 Monochrome. All rights reserved. | Designed with
              passion for timeless fashion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
