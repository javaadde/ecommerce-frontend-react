import { Link } from "react-router-dom";
import axios from "../../../axios";
import { useEffect, useState } from "react";

function OrdersBody() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/order")
      .then((res) => {
        const data = res.data;
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getStatusColor(status) {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium capitalize";
      case "shipped":
        return "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium capitalize";
      case "processing":
        return "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium capitalize";
      case "cancelled":
        return "bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium capitalize";
      default:
        return "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium capitalize";
    }
  }

  return (
    <>
      <div className="space-y-6 flex flex-col gap-4 px-2 py-5" id="ordersList">
        {orders.map((order, index) => (
          <Link to={"/order/details/" + order._id} key={index}>
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow cursor-pointer"
              id=""
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between ">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-lg font-semibold text-off-black">
                      {order._id}
                    </h3>

                    <span className={getStatusColor(order.status)}>
                      {order.status}
                    </span>
                  </div>
                  <p className="text-dark-gray text-sm mb-2">
                    Placed on: &nbsp; {order.date.toLocaleString()}{" "}
                  </p>
                  <p className="text-dark-gray text-sm">
                    {" "}
                    {order.items.length}{" "}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex -space-x-2">
                      <img
                        src={item.url}
                        alt="images"
                        className="w-10 h-15 rounded-lg border-2 border-white object-cover bg-soft-gray"
                      />
                    </div>
                  ))}

                  <div className="text-right flex">
                    <p className="text-lg font-semibold text-off-black">
                      {" "}
                      {order.total}{" "}
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
          </Link>
        ))}
      </div>
    </>
  );
}

export default OrdersBody;
