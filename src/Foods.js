import React, { useState, useRef, useMemo, useCallback } from "react";
import FoodList from "./FoodList";
import AddFood from "./AddFood";

function countOrderFoods(foods) {
  console.log("주문 완료된 음식을 세는 중...");
  return foods.filter((food) => food.order).length;
}

function Foods() {
  const [inputs, setInputs] = useState({
    foodname: "",
    kcal: "",
  });
  const { foodname, kcal } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

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
  const onCreate = useCallback(() => {
    const food = {
      id: nextId.current,
      foodname,
      kcal,
    };
    setFoods(foods.concat(food));

    setInputs({
      foodname: "",
      kcal: "",
    });
    nextId.current += 1;
  }, [foods, foodname, kcal]);

  const onRemove = useCallback(
    (id) => {
      setFoods(foods.filter((food) => food.id !== id));
    },
    [foods]
  );

  const onToggle = useCallback(
    (id) => {
      setFoods(
        foods.map((food) =>
          food.id === id ? { ...food, order: !food.order } : food
        )
      );
    },
    [foods]
  );

  const count = useMemo(() => countOrderFoods(foods), [foods]);
  return (
    <>
      <AddFood
        foodname={foodname}
        kcal={kcal}
        onChange={onChange}
        onCreate={onCreate}
      />
      <FoodList foods={foods} onRemove={onRemove} onToggle={onToggle} />
      <div>주문완료 음식 : {count}</div>
    </>
  );
}

export default Foods;
