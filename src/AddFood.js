import React from "react";

function AddFood({ foodname, kcal, onChange, onCreate }) {
  return (
    <div>
      <input
        name="foodname"
        placeholder="음식명"
        onChange={onChange}
        value={foodname}
      />
      <input
        name="kcal"
        placeholder="칼로리"
        onChange={onChange}
        value={kcal}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default AddFood;
