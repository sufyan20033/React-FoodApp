import React from 'react';
import './Fooditem.css';

function Fooditem({ fooddata }) {
  return (
    <div className="food-item">
      <h4>{fooddata.title}</h4>
      <img src={fooddata.image} alt={fooddata.title} />
      <br />
      <button>View Recipe</button>
    </div>
  );
}

export default Fooditem;
