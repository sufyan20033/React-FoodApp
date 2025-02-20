import React from 'react';
import './Fooditem.css';

function Fooditem({fooddata, setfoodID}) {
  const handleClick = ()=>{
      
  }
  
  return (
    <div className="food-item">
      <h4>{fooddata.title}</h4>
      <img src={fooddata.image} alt={fooddata.title} />
      {console.log(fooddata)}
      <br />
      <button onClick={()=>{setfoodID(fooddata.id)}}>View Recipe</button>
    </div>
  );
}

export default Fooditem;
