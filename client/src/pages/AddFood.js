import { useState } from "react";
import API from "../services/api";

function AddFood() {
  const [food, setFood] = useState({
    foodName: "",
    quantity: "",
    location: "",
    expiryDate: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/food/add", food);

    alert("Food Added");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Food</h2>

      <input
        placeholder="Food Name"
        onChange={(e) =>
          setFood({
            ...food,
            foodName: e.target.value,
          })
        }
      />

      <input
        placeholder="Quantity"
        onChange={(e) =>
          setFood({
            ...food,
            quantity: e.target.value,
          })
        }
      />

      <input
        placeholder="Location"
        onChange={(e) =>
          setFood({
            ...food,
            location: e.target.value,
          })
        }
      />

      <input
        placeholder="Expiry Date"
        onChange={(e) =>
          setFood({
            ...food,
            expiryDate: e.target.value,
          })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setFood({
            ...food,
            description: e.target.value,
          })
        }
      />

      <button>Add Food</button>
    </form>
  );
}

export default AddFood;