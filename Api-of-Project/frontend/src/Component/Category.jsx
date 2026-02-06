import axios from "axios";
import { useEffect, useState } from "react";

function Category() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);

  const token = localStorage.getItem("token");

  const addCategory = async () => {
  try {
    await axios.post("http://localhost:4512/category",{ title },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    alert("Category Added");
    setTitle("");
    fetchCategories();

  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};


  const fetchCategories = async () => {
  try {
    const res = await axios.get("http://localhost:4512/category");
    setCategories(res.data);
  } catch (err) {
    alert(err.response?.data?.message || err.message);
  }
};


  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <h2>Add Category</h2>
      <input placeholder="Category Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={addCategory}>Add</button>

      <h3>Category List</h3>
      {categories.map((cat) => (
        <p key={cat._id}>{cat.title}</p>
      ))}
    </div>
  );
}

export default Category;
