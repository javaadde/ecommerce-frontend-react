import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="py-4 items-center bg-white shadow-sm border-b border-gray-200 font-michroma">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V16.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="9" cy="20" r="1" fill="white" />
                  <circle cx="20" cy="20" r="1" fill="white" />
                </svg>
              </div>
              <h1 className=" text-2xl font-bold text-black font-michroma">
                Orders
              </h1>
            </div>

            <Link to="/settings">
              <button className="cursor-pointer text-dark-gray hover:text-black text-3xl">
                <i className="fa-solid fa-circle-user"></i>
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
