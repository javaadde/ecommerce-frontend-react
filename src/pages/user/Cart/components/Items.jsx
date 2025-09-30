import useCart from "../../hooks/useCart";

function Items() {

  const {cartItems,increaseItemQty,decreaseItemQty,deleteCartItem} = useCart()

  return (
    <>
  
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="p-6 flex items-center  shadow-xl rounded-b-md font-comfortaa"
        >
          <img
            src={item.url}
            alt="product image"
            className="w-[25vh] h-45 rounded-lg object-cover bg-soft-gray"
          />

          <div className="flex-1 pl-12">
            <h3 className="text-lg font-semibold text-black mb-1">
              {item.name}
            </h3>
            <p className="text-dark-gray text-sm">{item.price}</p>
          </div>

          <div className="flex items-center gap-6">
            {/* <!-- Quantity Controls --> */}
            <div className="flex items-center space-x-2 bg-soft-gray rounded-lg">
              <button
                onClick={() => {
                  decreaseItemQty(item.product_id);
                }}
                className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-square-minus"></i>
              </button>

              <span className="px-3 py-1 text-black font-medium min-w-[2rem] text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => {
                  increaseItemQty(item.product_id);
                }}
                className="p-2 cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-square-plus"></i>
              </button>
            </div>

            {/* <!-- Item Total --> */}
            <div className="text-right min-w-[4rem]">
              <p className="text-lg font-semibold text-black">
                {item.price * item.quantity}
              </p>
            </div>

            {/* <!-- Remove Button --> */}
            <button
              onClick={() => {
                deleteCartItem(item.product_id);
              }}
              className="p-2 cursor-pointer text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              title="delete cart item"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
   
  </>);
}

export default Items;
