import { Routes, Route } from "react-router-dom";
import AddCartMan from "./pages/AddCartMan/AddCartMan";
import AddCartWoman from "./pages/AddCartWoman/AddCartWoman";
import CheckOut from "./pages/Checkout/CheckOut";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/productmen" element={<AddCartMan />} />
        <Route path="/productwomen" element={<AddCartWoman />} />
      </Routes>
    </div>
  );
}

export default App;
