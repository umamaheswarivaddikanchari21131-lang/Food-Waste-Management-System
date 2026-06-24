function FoodCard({ food }) {
  return (
    <div className="card">
      <h3>{food.foodName}</h3>

      <p>Quantity: {food.quantity}</p>

      <p>Location: {food.location}</p>

      <p>Expiry: {food.expiryDate}</p>

      <p>{food.description}</p>
    </div>
  );
}

export default FoodCard;