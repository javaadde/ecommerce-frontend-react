import axios from "../../../axios";
import showNotification from "../../../notification.mjs";



function Pro(props){

    const product_id = props.proId;

const addToCart = ()=>{
 
    axios.patch(`/cart/add/${product_id}`)
    .then( (res) => {
      const message = res.data.message;
       showNotification(message);
    })
    .catch( (err) =>{
        console.log(err);
        
    })
  
}

    return(
        <>
             <div className="group cursor-pointer mt-4 z-0 w-52 ">
                    <div className="bg-white rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                        <div className="h-66 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                            <img 
                                src={props.url}
                                alt={props.category + " " + props.name} 
                                className="w-full h-full object-cover"
                            />
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 items-center justify-center hidden">
                               icon
                            </div>
                        </div>
                        <div className="p-4 text-center border-t flex flex-col gap-4 w-full min-h-[25vh]">
                            <div>
                                <h4 className="font-comfortaa font-semibold text-black mb-1">{props.name}</h4>
                                <p className="text-sm text-gray-500 font-comfortaa">props.texts</p>
                            </div>

                            <div className="flex flex-row w-full justify-between px-3 mt-auto py-3">
                                <span>{props.price}</span>
                                <button 
                                 value={props.proId}
                                  onClick={addToCart}
                                 className="hover:text-blue-500 text-2xl">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </button>
                            </div>
                       </div>
                    </div>
                </div>
        </>
    )
}

export default Pro