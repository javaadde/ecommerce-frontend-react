import { useEffect, useState } from "react";
import axios from "./axios.jsx";
import { Navigate } from "react-router-dom";


function ProtectedToAdmin({ children }) {
  let [isAdmin, setIsAdmin] = useState();

  useEffect( () => {
            
          
            

         axios.get("/admin").then((res) =>{

             console.log(res);
             if(res.status === 401){
                 console.log(res.status);
                 setIsAdmin(false);
             }
             else if(res.data.isAdmin === true){
                setIsAdmin(true)
                
             }
             else{
                  setIsAdmin(true)
             }

         })


      

  },[isAdmin])

  

   if (isAdmin === true) {
      return children;
    }
    else if(isAdmin === false){
       console.log(isAdmin);
    return <Navigate to="/401" replace></Navigate>;   
  }

}


export default ProtectedToAdmin;
