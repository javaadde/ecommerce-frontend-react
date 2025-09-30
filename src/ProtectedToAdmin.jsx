import { useEffect, useState } from "react";
import axios from "./axios.jsx";
import { Navigate } from "react-router-dom";

function ProtectedToAdmin({ children }) {
  let [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("/admin");
        if (res.status === 200 && res.data.isAdmin === true) {
          setIsAdmin(true);
        }
      } catch (error) {
        if (error.status === 401) {
          setIsAdmin(false);
        }
      }
    };

    fetch();
  }, [isAdmin]);

  if (isAdmin === true) {
    return children;
    
  } else if (isAdmin === false) {
    console.log(isAdmin);

    return <Navigate to="/401" replace></Navigate>;
  }
}

export default ProtectedToAdmin;
