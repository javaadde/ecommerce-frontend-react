import { useParams } from "react-router-dom";
import axios from "../../../axios";
import { useState,useEffect } from "react";
import showNotification from "../../../notification.mjs";
import { useNavigate } from "react-router-dom";

function OrderorAdmin(){
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("");

 

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`/order/${id}`)
      .then((res) => {
        const data = res.data;
       
        setOrder(data);
        setItems(data.items);
        setStatus(data.status)
      })
      .catch((err) => console.log(err));


  }, []);


  const updateStatus = () => {
      const updtValue = {status:status}
      axios.put(`/admin/order/update/${id}`,updtValue)
      .then((res) =>{
         const data = res.data.Status;
 
         showNotification("status changed to " + data)
      })
      .catch((err) => console.log(err))

    }


    const deleteOrder = () => {

        if(confirm("are you sure to delete")){

            axios.delete(`/admin/order/delete/${id}`)
            .then((res) => {
               const message = res.data.msg;
               
               showNotification(message)
     
               setTimeout( ()=>{
                navigate("/admin/orders")
               },200)
               
            })
            .catch(err=> console.log(err))
        }

    }
  



  
  function getStatusColor(status) {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 px-5 py-2 rounded-full text-md font-medium capitalize";
      case "shipped":
        return "bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-md font-medium capitalize";
      case "processing":
        return "bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full text-md font-medium capitalize";
      case "cancelled":
        return "bg-red-100 text-red-800 px-5 py-2 rounded-full text-md font-medium capitalize";
      default:
        return "bg-gray-100 text-gray-800 px-5 py-2 rounded-full text-md font-medium capitalize";
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

              {/*  Order Summary &  */}

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

                  <select 
                  onChange={(e) => {setStatus(e.target.value)}}
                  id="status-select"
                  value={status}
                 className={getStatusColor(status)}
                // class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option id="placed" value="placed" >Placed</option>
                <option id="proccessing" value="processing">Processing</option>
                <option id="shipped" value="shipped" >Shipped</option>
                <option id="delivered" value="delivered">Delivered</option>
                <option id="cancelled" value="cancelled" >Cancelled</option>
              </select>


              <button  
              onClick={updateStatus}
                className="px-6 py-2 ml-7 cursor-pointer bg-gray-200 text-black rounded-full hover:bg-dark-gray transition-colors font-medium"
              >
                Update Status
              </button>

                </div>
              </div>
            </div>
          </div>

          {/* Footer  */}
          <div
          
          className="p-6 border-t-[2px] border-gray-100 flex justify-center space-x-3 ">
            <button 
            onClick={deleteOrder}
             className="px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-dark-gray cursor-pointer transition-colors font-medium">
              Delete Order
            </button>
          </div>

          <div className="p-6  border-gray-100 flex justify-end space-x-3">
            
          
          </div>
        </div>
      </section>
    </>
  );
}


export default OrderorAdmin