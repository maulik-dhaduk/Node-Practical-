import { Route, Routes } from "react-router-dom";
import Category from "./Component/Category";
import Product from "./Component/Product";

function App() {
  return (
    <>
    <Routes>
      <Route path="/category" element={<Category/>} />
      <Route path="/" element={<Product/>} />
    </Routes>
    </>
  );
}

export default App;
