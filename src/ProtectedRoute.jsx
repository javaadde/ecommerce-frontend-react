import { useEffect, useState } from "react";
import axios from "./axios.jsx";
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {
  let [isLogined, setIsLogined] = useState();

  useEffect( () => {
    async function check() {
        try {
          const res = await axios.get("/", { withCredentials: true });
          setIsLogined(res.data.is);
        } catch (error) {
          console.log(error);
        }
    }

    check()

  },[isLogined])

  

   if (isLogined === true) {
      return children;
    }
    else if(isLogined === false){
       console.log(isLogined);
    return <Navigate to="/unknown" replace></Navigate>;   
  }

}


export default ProtectedRoute;
