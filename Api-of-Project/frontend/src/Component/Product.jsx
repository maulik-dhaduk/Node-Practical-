import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:4512/category");
    setCategories(res.data);
  };

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:4512/product");
    setProducts(res.data);
  };

 const addProduct = async () => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    await axios.post("http://localhost:4512/product", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });

    alert("Product Added");
    setName("");
    setPrice("");
    setImage(null);
    setCategoryId("");
    fetchProducts();

  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};


  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Add Product</h2>

      <input placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)}/><br />

      <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/><br />

      <select onChange={(e) => setCategoryId(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.title}
          </option>
        ))}
      </select><br />

      <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br />

      <button onClick={addProduct}>Add Product</button>

      <h3>Product List</h3>
      {products.map((p) => (
        <div key={p._id}>
          <p>Name: {p.name}</p>
          <p>Price: {p.price}</p>
          <p>Category: {p.categoryId?.title}</p>
          <img src={`http://localhost:4512/${p.image}`} width="100" />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Product;
