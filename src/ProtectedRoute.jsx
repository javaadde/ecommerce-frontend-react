import { useEffect, useState } from "react";
import axios from "./axios.jsx";
import { Navigate } from "react-router-dom";


function ProtectedRoute({ children }) {
  let [isLogined, setIsLogined] = useState();
  let [role, setRole] = useState();

  useEffect( () => {
    async function check() {


        try {
          const res = await axios.get("/", { withCredentials: true });
          setIsLogined(res.data.is);
          setRole(res.data.role);
        } catch (error) {
          console.log(error);
        }
    }

    check()

  },[isLogined,role])

  

   if (isLogined === true) {
    if(role === "user"){
      return children;
    }
    else if(role === "admin"){
      return <Navigate to="/admin"/>
    }
     
    }
    else if(isLogined === false){
       console.log(isLogined);
    return <Navigate to="/unknown" replace></Navigate>;   
  }

}


export default ProtectedRoute;
