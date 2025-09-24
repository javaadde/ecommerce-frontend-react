import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import axios from "./axios.jsx";

// PAGES
import Home from "./pages/Home/Home.jsx";
import HomeNotLogined from "./pages/Home_unknown/HomeNotLogined.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Setting from "./pages/Settings/Setting.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Products from "./pages/Products/Products.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import OrderDetails from "./pages/Orders/OrderDetails.jsx";

//CONTEXTS
import { UpdaterCart } from "./pages/Cart/components/Items.jsx";
import { useContext } from "react";

axios.defaults.withCredentials = true;

function App() {
  const updater = useContext(UpdaterCart);

  return (
    <>

      <UpdaterCart.Provider value={updater}>
          <Router>
            <Routes>
              {/* Home route */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              {/* unkown user home route */}
              <Route path="/unknown" element={<HomeNotLogined />} />

              {/* Login route */}
              <Route path="/login" element={<SignIn />} />

              {/* signup route */}
              <Route path="/signUp" element={<SignUp />} />

              {/* settings route */}
              <Route path="/settings" element={<Setting />} />

              {/* cart route */}
              <Route path="/cart" element={<Cart />} />

              {/* cart route */}
              <Route path="/products" element={<Products />} />

              {/* ORDERS route */}
              <Route path="/orders" element={<Orders />} />

              {/* ORDERS route */}
              <Route
                path="/order/details/:id"
                element={<OrderDetails />}
              />
            </Routes>
          </Router>
      </UpdaterCart.Provider>

    </>
  );
}

export default App;
