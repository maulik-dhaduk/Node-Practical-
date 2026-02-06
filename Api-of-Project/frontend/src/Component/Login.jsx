import axios from "axios";
import { useState } from "react";

function Login() {
  const [form, setForm] = useState({});
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:4512/login",form);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful")
  
  } catch (err) {
    alert(err.response.data.message)
  } 
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;