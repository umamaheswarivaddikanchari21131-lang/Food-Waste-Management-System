import { useEffect, useState } from "react";
import API from "../services/api";
import FoodCard from "../components/FoodCard";

function AvailableFood() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    const res = await API.get("/food");

    setFoods(res.data);
  };

  return (
    <div>
      <h2>Available Food</h2>

      {foods.map((food) => (
        <FoodCard
          key={food._id}
          food={food}
        />
      ))}
    </div>
  );
}

export default AvailableFood;