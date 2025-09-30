import { useEffect, useState } from "react";
import axios from "../../../axios";
import showNotification from "../../../notification.mjs";


function useCart(){


 let [update, setUpdate] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal] = useState(0)

  useEffect(() => {

    const fetchCart = async () => {
      axios.get("/cart").then((res) => {
        const items = res.data.items;
        setCartItems(items);
        setTotal(res.data.subtotal)
      
      });
    };

    fetchCart();
  }, [update]);

  const increaseItemQty = (id) => {
    axios
      .patch(`/cart/quantity/increase?id=${id}`)
      .then((res) => {
        const problem = res.data.problem;
        const message = res.data.message;
        if (problem) {
          showNotification(message);
        }
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  const decreaseItemQty = (id) => {
    axios
      .patch(`/cart/quantity/decrease?id=${id}`)
      .then((res) => {
        const problem = res.data.problem;
        const message = res.data.message;
        if (problem) {
          showNotification(message);
        }
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  const deleteCartItem = (id) => {
    axios
      .delete(`/cart/delete/${id}`)
      .then((res) => {
        console.log(res);
        const message = res.data.message;
        setUpdate((update = update + 1));
      })
      .catch((err) => console.log(err));
  };

  
  const addToCart = (product_id)=>{
 
    axios.patch(`/cart/add/${product_id}`)
    .then( (res) => {
      const message = res.data.message;
       showNotification(message);
    })
    .catch( (err) =>{
        console.log(err);
        
    })
  }
  

  return{decreaseItemQty,increaseItemQty,deleteCartItem,addToCart,total,cartItems}
}

export default useCart