import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import HomeNotLogined from "./components/HomeNotLogined.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import axios from "./axios.jsx";
import { Setting } from "./components/Setting.jsx";


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
