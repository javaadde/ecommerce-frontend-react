import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()
    
  const openNav = () => {
    document.getElementById("navbar").classList.remove("translate-x-full");
  };

  const closeNav = () => {
    document.getElementById("navbar").classList.add("translate-x-full");
  };

  const navigateSignIn = () => {
     navigate('/login')
  }
  
  const navigateSignUp = () => {
     navigate('/signUp')
  }
  
    return(<>
    

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
              <button  
              onClick={navigateSignIn} 
                className="border border-black text-black px-4 py-2 rounded-lg text-sm font-comfortaa font-medium hover:bg-black hover:text-white transition-all duration-200"
              >
                Sign In
              </button>
              <button
              onClick={navigateSignUp}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm font-comfortaa font-medium hover:bg-gray-700 transition-all duration-200"
              >
                Sign Up
              </button>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden">
              <button
                onClick={openNav}
                className="text-black text-2xl cursor-pointer hover:text-gray-600"
              >
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile navbar */}

      <div
        id="navbar"
        className="h-full w-1/2 fixed bg-white z-99 translate-x-full transition-all ease-in top-0 right-0"
      >
        <div>
          <button
            onClick={closeNav}
            className="text-black absolute left-3 top-3 px-3 py-2 border-1 hover:bg-black hover:text-white rounded cursor-pointer shadow-2xl"
          >
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

    </>)
}

export default Header