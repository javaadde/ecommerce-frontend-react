import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "./axios.jsx";

// PAGES
import Home from "./pages/Home/Home.jsx";
import HomeNotLogined from "./pages/Home_unknown/HomeNotLogined.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Setting from "./pages/Settings/Setting.jsx";



axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* Home route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />


          {/* unkown user home route */}
          <Route path="/unknown" element={<HomeNotLogined />} />


          {/* Login route */}
            <Route path="/login" element={<SignIn/>} />

          {/* signup route */}
            <Route path="/signUp" element={<SignUp/>} />

          {/* settings route */}
            <Route path="/settings" element={<Setting/>} />



        </Routes>
      </Router>
    </>
  );
}

export default App;
