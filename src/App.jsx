import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/ProfilePage.jsx";
import CartProvider from "./context/CartContext.jsx";
import PizzaProvider from "./context/PizzaContext.jsx";
import { UserContext } from "./context/UserContext.jsx";
import "./App.css";

function App() {
  const { token } = useContext(UserContext);
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/404";

  return (
    <CartProvider>
      <PizzaProvider>
        <div className="app-container">
          {!hideNavbarFooter && <Navbar />}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={token ? <Navigate to="/" /> : <RegisterPage />}
              />
              <Route
                path="/login"
                element={token ? <Navigate to="/" /> : <LoginPage />}
              />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/profile"
                element={token ? <Profile /> : <Navigate to="/login" />}
              />
              <Route path="/footer" element={<Footer />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </div>
          {!hideNavbarFooter && <Footer />}
        </div>
      </PizzaProvider>
    </CartProvider>
  );
}

export default App;
