import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../axios";

function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [status,setStatus] = useState()

  useEffect(() => {
    axios
      .get(`/order/${id}`)
      .then((res) => {
        const data = res.data;
        setOrder(data);
        setItems(data.items);
      })
      .catch((err) => console.log(err));
  }, [status]);


  const cancellOreder = ()=>{

    if(confirm("are you sure to cancell")){
     axios.patch(`/order/cancell/${id}`)
     .then((res)=>{
        console.log(res.data);
        setStatus(res.data.updated)
     })
     .catch((err) => console.log(err))
    }
  }

  
  function getStatusColor(status) {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 px-3 py-1 rounded-full text-md font-medium capitalize";
      case "shipped":
        return "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-md font-medium capitalize";
      case "processing":
        return "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-md font-medium capitalize";
      case "cancelled":
        return "bg-red-100 text-red-800 px-3 py-1 rounded-full text-md font-medium capitalize";
      default:
        return "bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-md font-medium capitalize";
    }
  }

  return (
    <>
      <div className="p-6 flex items-center font-michroma">
        <div>
          <h2
            className="text-2xl font-bold text-black"
            id="modalOrderNumber"
          >
            {order.user_id}
          </h2>
          <p className="text-dark-gray" id="modalOrderDate">
            {order._id}
          </p>
        </div>
      </div>

      <section className="font-comfortaa">
        <div className="bg-white rounded-xl shadow-xl w-full">
          {/* <!-- Content --> */}
          <div className="p-6">
            <div className="grid grid-cols-1 gap-8">
              {items.map((item, index) => (
                <div className="p-8 " key={index}>
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Order Item
                  </h3>
                  <div id="modalOrderItems" className="space-y-4">
                    {/* <!-- Items will be populated here --> */}

                    <div className="flex items-center space-x-4 p-4 bg-soft-gray rounded-lg flex-col md:flex-row">
                      <img
                        src={item.url}
                        alt={item.name}
                        className="w-26 h-36 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-black">
                          {item.name}
                        </h4>
                        <p className="text-dark-gray text-sm">
                          {item.price} &nbsp; x &nbsp; {item.quantity}
                        </p>
                      </div>
                      <div className="text-right pr-5">
                        <p className="font-semibold text-black">
                          Subtotal : &nbsp; {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/*  Order Summary & Details  */}

              <div className="lg:col-span-1 space-y-6 p-5">
                {/*  Order Summary */}
                <div className="bg-soft-gray rounded-xl p-4 px-8">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Order Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-dark-gray">Subtotal</span>
                      <span id="modalSubtotal" className="text-black">
                        {order.total - 5.99}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-gray">Shipping</span>
                      <span id="modalShipping" className="text-black">
                        $5.99
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark-gray">Tax</span>
                      <span id="modalTax" className="text-black">
                        $0.00
                      </span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-black">Total</span>
                        <span id="modalTotal" className="text-black">
                          {order.total}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Shipping Address --> */}
                <div className="bg-soft-gray rounded-xl p-4 px-8">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Shipping Address
                  </h3>
                  <div
                    id="modalShippingAddress"
                    className="text-sm text-dark-gray"
                  >
                    {order?.address &&
                      Object.keys(order?.address).map((key, i) => {
                        
                        return (
                          <p key={i}>
                            <span className="font-bold"> {key}: </span> &nbsp;
                            {order.address[key]}
                          </p>
                        );
                      })}
                  </div>
                </div>

                {/* <!-- Order Status --> */}
                <div className="bg-soft-gray rounded-xl p-4 px-8">
                  <h3 className="text-xl text-black mb-2">
                    Order Status
                  </h3>
                  <span className={getStatusColor(order.status)} id="modalOrderStatus">{order.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div className="p-6 border-t-[2px] border-gray-100 flex justify-center space-x-3 ">
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-dark-gray cursor-pointer transition-colors font-medium">
              Track Order
            </button>
          </div>

          <div className="p-6  border-gray-100 flex justify-end space-x-3">
            
            <button
            onClick={cancellOreder} 
            className="px-6 cursor-pointer py-2 hover:bg-gray-400 font-xl underline font-bold rounded-2xl ">
              Cancel Order
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderDetails;
