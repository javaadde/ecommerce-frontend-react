import { useEffect, useState } from "react";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./components/Pagination";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const navigator = useNavigate();
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerpage] = useState(3);

  useEffect(() => {
    if (status === "") {
      axios
        .get("/admin/orders")
        .then((res) => {
          const data = res.data.data;
          setOrders(data);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`/admin/orders/${status}`)
        .then((res) => {
          const data = res.data;
          setOrders(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [status]);

  const seeDetails = async () => {
    const user_id = document.getElementById("username").value;
    const res = await axios.get(`/admin/orders/user/${user_id}`);
    const data = res.data;

    setOrders(data);
  };

  const navigateToDetails = (id) => {
    navigator(`/admin/orders/${id}`);
  };

  function getStatusColor(status) {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize";
      case "shipped":
        return "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize";
      case "processing":
        return "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium capitalize";
      case "cancelled":
        return "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium capitalize";
      default:
        return "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium capitalize";
    }
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentOrders = orders.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="bg-white w-full min-h-screen flex flex-col items-center">
        {/* top Bar */}

        <div className="w-full h-[13vh] flex border-b-1 border-gray-200 shadow">
          <div className="w-1/2 flex items-center justify-center">
            <h1 className="font-michroma text-xl">
              Find By Status :&nbsp;&nbsp;
            </h1>
            <select
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              id="status-select"
              value={status}
              className={getStatusColor(status) + " text-xl"}
              // class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option id="" value="">
                all
              </option>
              <option id="placed" value="placed">
                Placed
              </option>
              <option id="proccessing" value="processing">
                Processing
              </option>
              <option id="shipped" value="shipped">
                Shipped
              </option>
              <option id="delivered" value="delivered">
                Delivered
              </option>
              <option id="cancelled" value="cancelled">
                Cancelled
              </option>
            </select>
          </div>

          <div className="w-1/2 font-comfortaa flex flex-row gap-5 justify-center items-center">
            <input
              type="text"
              id="username"
              placeholder="username"
              className="p-2 px-4 rounded border-2 border-black"
              required
            />

            <button
              onClick={seeDetails}
              className="bg-black px-4 rounded text-white p-2 cursor-pointer border-2 border-black"
            >
              {/* <i className="fa solid-fa search"></i> */}
              find
            </button>
          </div>
        </div>

        <div id="ordersDiv" className="bg-white min-h-[70vh] pt-5">
          <div className="max-w-6xl mx-auto flex flex-col gap-8  font-comfortaa">
            <div className="space-y-6 flex flex-col gap-4" id="ordersList">
              {/* Orders will be populated here --> */}

              {currentOrders.map((order, i) => {
                return (
                  <div
                    onClick={() => {
                      navigateToDetails(order._id);
                    }}
                    key={i}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:scale-110 duration-200 transition-al cursor-pointer"
                    id=" order._id "
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between ">
                      {/* Order Info --> */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-lg font-semibold text-black">
                            Order {i + 1}
                          </h3>
                          <span className={getStatusColor(order.status)}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-dark-gray text-sm mb-2">
                          Placed on: &nbsp; {order.date}
                        </p>
                        <p className="text-dark-gray text-sm">
                          {" "}
                          {order.items.length} items
                        </p>
                      </div>

                      {/* Order Preview --> */}

                      <div className="flex items-center space-x-4">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex -space-x-2">
                            <img
                              src={item.url}
                              alt={item.name}
                              className="w-10 h-15 rounded-lg border-2 border-white object-cover bg-soft-gray"
                            />
                          </div>
                        ))}
                        {/* Total & Arrow --> */}
                        <div className="text-right flex">
                          <p className="text-lg font-semibold text-black">
                            {" "}
                            {order.total}
                          </p>
                          <svg
                            className="w-5 h-5 text-dark-gray mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Pagination
          totalPosts={orders.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default AdminOrders;
