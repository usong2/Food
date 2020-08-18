import React from "react";

function Food({ food, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: food.order ? "red" : "black" }}
        onClick={() => onToggle(food.id)}
      >
        {food.foodname}
      </b>
      <span>({food.kcal})</span>
      <button onClick={() => onRemove(food.id)}>삭제</button>
    </div>
  );
}

function FoodList({ foods, onRemove, onToggle }) {
  return (
    <div>
      {foods.map((food) => (
        <Food
          food={food}
          key={food.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default FoodList;
