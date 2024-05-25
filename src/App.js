import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./Register";
import Cart from "./Cart";
import Login from "./Login";
import User from "./User";
import Profile from "./Profile";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/users" element={<User />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App