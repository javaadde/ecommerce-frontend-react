import { useEffect, useState } from "react";
import axios from "../../../../axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCart from "../../hooks/useCart";

function States() {
  // form (address) schema
  const schema = yup.object().shape({});

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  // ==================================

   const {total} = useCart()
   
   useEffect(()=>{
    console.log(total);

   },[total])

  function proceedToCheckout() {
    
    const popup = document.getElementById("paymentDiv");
    popup.classList.remove("hidden");
  }

  function cancelPayment(){
     const popup = document.getElementById("paymentDiv");
    popup.classList.add("hidden");
  }

  function proceedToPay(data) {
    const popup = document.getElementById("paymentDiv");
    popup.classList.add("hidden");

    placeOrder(total + 5.99, data);
  }

  async function placeOrder(subtotal, data) {
    const formData = {
      total: subtotal,
      address: data,
    };

    console.log(formData);

    try {
      axios
        .post("/order", formData)
        .then(async (res) => {
          const data = res.data;
          console.log(data.message);

          Notify();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }

  function Notify() {
    console.log("ok");

    const modalOverlay = document.getElementById("modalOverlay");
    const loadingState = document.getElementById("loadingState");
    const successState = document.getElementById("successState");

    // Show modal
    modalOverlay.classList.remove("hidden");
    modalOverlay.classList.add("flex");
    loadingState.classList.remove("hidden");
    successState.classList.add("hidden");

    // After 1.5 seconds, switch to success state
    setTimeout(() => {
      loadingState.classList.add("hidden");
      successState.classList.remove("hidden");
    }, 1500);
  }

  return (
    <>
      <div className="lg:col-span-1 w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-5 mt-5 h-[85vh] flex flex-col gap-5 font-comfortaa">
          <h2 className="text-xl font-semibold text-black mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-800">
              <span>Subtotal</span>
              <span id="subtotal">${total}</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Shipping</span>
              <span id="shipping">$5.99</span>
            </div>
            <div className="flex justify-between text-gray-800">
              <span>Tax</span>
              <span id="tax">$0.00</span>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-bold text-black">
                <span>Total</span>
                <h2>
                  $ <span id="total">{total + 5.99}</span>
                </h2>
              </div>
            </div>
          </div>

          <button
            onClick={proceedToCheckout}
            id="checkoutBtn"
            className="w-full px-6 py-4 cursor-pointer text-white bg-black rounded-xl hover:bg-white border-1 hover:text-black transition-colors font-semibold text-lg mb-4"
          >
            Proceed to Checkout
          </button>

          <Link to="/products">
            <button className="w-full px-6 py-3 bg-white cursor-pointer text-black border-1 border-black rounded-xl hover:bg-black hover:text-white transition-colors font-medium">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>


      {/* <!-- first modal  for delivery details--> */}
      <section
        className="hidden absolute left-auto lg:left-[10%] xl:left-[20%] top-0  items-center justify-center p-9 font-comfortaa"
        id="paymentDiv"
      >
        {/* <!-- Delivery Form --> */}
        <div className="lg:col-span-2">
          <button 
          onClick={cancelPayment}
          className="absolute cursor-pointer text-2xl right-12 top-12 w-10 h-10 rounded-full bg-black text-white">
            x
          </button>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-black mb-6">
              Shipping Information
            </h2>

            <form id="deliveryForm" className="space-y-6">
              {/* <!-- Name & Phone Row --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                    required
                    {...register("fullName")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                    required
                    {...register("phoneNumber")}
                  />
                </div>
              </div>

              {/* <!-- Street Address --> */}
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="123 Main Street"
                  className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                  required
                  {...register("streetAddress")}
                />
              </div>

              {/* <!-- Apartment/Unit (Optional) --> */}
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Apartment, Suite, Unit (Optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apt 4B, Suite 100, Unit 5, etc."
                  className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                  {...register("apartment")}
                />
              </div>

              {/* <!-- City, State, ZIP Row --> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Mumbai"
                    className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                    required
                    {...register("city")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    State
                  </label>
                  <select
                    name="state"
                    className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                    required
                    {...register("state")}
                  >
                    <option value="">Select State</option>
                    <option value="NY">Kerala</option>
                    <option value="CA">Mumbai</option>
                    <option value="TX">Panjab</option>
                    <option value="FL">Goa</option>
                    <option value="IL">Delhi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-gray mb-2">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    placeholder="676122"
                    className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                    required
                    {...register("pinCode")}
                  />
                </div>
              </div>

              {/* <!-- Country --> */}
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Country
                </label>
                <input
                  readOnly
                  value="india"
                  placeholder="India"
                  name="country"
                  className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all"
                  required
                  {...register("country")}
                />
              </div>

              {/* <!-- Delivery Instructions --> */}
              <div>
                <label className="block text-sm font-semibold text-dark-gray mb-2">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  name="deliveryInstructions"
                  placeholder="Leave at front door, Ring doorbell, Call upon arrival, etc."
                  rows="3"
                  className="w-full px-4 py-3 bg-soft-gray border-2 border-gray-200 rounded-lg text-black focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                  {...register("instructions")}
                ></textarea>
              </div>

              {/* <!--  Payment --> */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm  border-gray-200 p-6 sticky top-6">
                  <h2 className="text-xl font-semibold text-black mb-6">
                    Payment
                  </h2>

                  {/* <!-- Payment Button --> */}
                  <button
                    onClick={handleSubmit(proceedToPay)}
                    className="cursor-pointer w-full px-6 py-4 bg-black text-white rounded-xl hover:bg-dark-gray transition-colors font-semibold text-lg mb-4 flex items-center justify-center space-x-2"
                  >
                    {" "}
                    pay{" "}
                  </button>

                  {/* <!-- Security Note --> */}
                  <div className="text-xs text-center text-dark-gray">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                      <span>Secure Payment</span>
                    </div>
                    <p>Your payment information is encrypted and secure</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>


      <div
        id="modalOverlay"
        className="justify-center items-center fixed inset-0 hidden bg-black bg-opacity-50 modal-backdrop z-50"
      >
        {/* Modal Content  */}
        <div
          id="modalContent"
          className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center modal-enter"
        >
          {/* Loading State  */}
          <div id="loadingState">
            <div className="mb-6">
              {/* Loading Circle  */}
              <div className="w-20 h-20 border-4 border-gray-200 border-t-black rounded-full loading-spinner mx-auto"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Processing Payment
            </h2>
            <p className="text-gray-600">
              Please wait while we process your order...
            </p>
          </div>

          {/* Success State --> */}
          <div id="successState" className="hidden">
            <div className="mb-6">
              {/* Success Circle with Checkmark --> */}
              <div className="w-20 h-20 mx-auto success-bounce">
                <svg className="w-full h-full" viewBox="0 0 80 80" fill="none">
                  {/* Circle --> */}
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#10B981"
                    strokeWidth="4"
                    fill="#F0FDF4"
                  />
                  {/* Checkmark --> */}
                  <path
                    d="M25 40L35 50L55 30"
                    stroke="#10B981"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="checkmark-path"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              Order Placed!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed. You will receive a
              confirmation email shortly.
            </p>

            {/* Close Button --> */}

            <Link to="/products">
              <button
                id="closeBtn"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default States;
