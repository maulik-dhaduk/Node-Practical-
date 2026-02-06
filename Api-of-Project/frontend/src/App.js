import Category from "./Component/Category";
import Login from "./Component/Login";
import Product from "./Component/Product";
import Register from "./Component/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </div>
  );
}

export default App;
