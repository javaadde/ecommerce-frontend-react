import { useEffect, useState } from "react";
import axios from "../../../../axios";
import { Link } from "react-router-dom";

function Body() {
  const [stateData, setStateData] = useState({});

  useEffect(() => {
    axios
      .get("/admin")
      .then((res) => {
        setStateData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 font-comfortaa">
        {/* <!-- Dashboard Stats --> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  {stateData.total_products}
                </p>
                <p className="text-sm text-dark-gray font-medium">
                  Total Products
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  {" "}
                  {stateData.total_orders}{" "}
                </p>
                <p className="text-sm text-dark-gray font-medium">
                  Total Orders
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 0h-5m-3-6V9a2 2 0 10-4 0v6m12 0v-3a3 3 0 00-6 0v3"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  {stateData.registered_users}
                </p>
                <p className="text-sm text-dark-gray font-medium">
                  Registered Users
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-black">
                  $ {stateData.total_revenew}
                </p>
                <p className="text-sm text-dark-gray font-medium">Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Navigation Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* <!-- Product Management --> */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 font-michroma">
                Product Catalog
              </h3>
              <p className="text-dark-gray mb-6 font-medium leading-relaxed">
                Manage your entire product inventory. Add new items, update
                existing products, and remove discontinued items.
              </p>
              <Link to="/admin/products">
                <button className="w-full cursor-pointer px-6 py-4 bg-black text-white rounded-xl hover:bg-dark-gray transition-colors font-semibold text-lg group-hover:scale-105 transform duration-300">
                  Manage Products
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- Order Management --> */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 font-michroma">
                Order Management
              </h3>
              <p className="text-dark-gray mb-6 font-medium leading-relaxed">
                View and manage all customer orders. Track order status, process
                refunds, and handle customer requests.
              </p>

              <Link to="/admin/orders">
                <button className="w-full cursor-pointer px-6 py-4 bg-black text-white rounded-xl hover:bg-dark-gray transition-colors font-semibold text-lg group-hover:scale-105 transform duration-300">
                  View Orders
                </button>
              </Link>
            </div>
          </div>

          {/* <!-- User Management --> */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 0h-5m-7-5v4h4v-4m-4 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 font-michroma">
                User Directory
              </h3>
              <p className="text-dark-gray mb-6 font-medium leading-relaxed">
                Access comprehensive user database. View customer profiles,
                manage accounts, 
                                Disable or Enable a perticular user.
              </p>
              <Link to="/admin/users">
                <button className="w-full cursor-pointer px-6 py-4 bg-black text-white rounded-xl hover:bg-dark-gray transition-colors font-semibold text-lg group-hover:scale-105 transform duration-300">
                  Manage Users
                </button>
              </Link>
            </div>
          </div>

          {/* Category Managements */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3 font-michroma">
                Category Managemeting
              </h3>
              <p className="text-dark-gray mb-6 font-medium leading-relaxed">
                Access comprehensive user database.,
                manage Categories,
                 and analyze user activity.
                 and Crud operations in categories
              </p>
              <Link to="/admin/categories">
                <button className="w-full cursor-pointer px-6 py-4 bg-black text-white rounded-xl hover:bg-dark-gray transition-colors font-semibold text-lg group-hover:scale-105 transform duration-300">
                  See Category
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
