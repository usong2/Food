import React, { useEffect } from "react";

function Food({ food, onRemove, onToggle }) {
  useEffect(() => {
    console.log("신메뉴 판매");
    console.log(food);

    return () => {
      console.log("메뉴 상태 변경");
      console.log(food);
    };
  }, [food]);

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
