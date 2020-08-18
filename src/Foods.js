import React, { useState, useRef } from "react";
import FoodList from "./FoodList";
import AddFood from "./AddFood";

function Foods() {
  const [inputs, setInputs] = useState({
    food: "",
    kcal: "",
  });
  const { foodname, kcal } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [foods, setFoods] = useState([
    {
      id: 1,
      foodname: "양념치킨",
      kcal: 300,
      order: true,
    },
    {
      id: 2,
      foodname: "후라이드치킨",
      kcal: 250,
      order: false,
    },
    {
      id: 3,
      foodname: "간장치킨",
      kcal: 280,
      order: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const food = {
      id: nextId.current,
      foodname,
      kcal,
    };
    setFoods(foods.concat(food));

    setInputs({
      food: "",
      kcal: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const onToggle = (id) => {
    setFoods(
      foods.map((food) =>
        food.id === id ? { ...food, order: !food.order } : food
      )
    );
  };

  return (
    <>
      <AddFood
        foodname={foodname}
        kcal={kcal}
        onChange={onChange}
        onCreate={onCreate}
      />
      <FoodList foods={foods} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default Foods;
