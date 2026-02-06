import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await axios.post("http://localhost:4512/register", form);
    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" name="email" placeholder="Email"  onChange={handleChange} required /><br />
      <input type="password" name="password"  placeholder="Password" onChange={handleChange} required /><br />
      <input type="text" name="role" placeholder="role"  onChange={handleChange}  required/><br />
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

export default Register;