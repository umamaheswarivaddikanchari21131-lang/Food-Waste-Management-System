import { useState } from "react";
import API from "../services/api";
import "../styles/register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Donor",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/users/register", form);

    alert("Registered Successfully");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      >
        <option>Donor</option>
        <option>NGO</option>
      </select>

      <button type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;