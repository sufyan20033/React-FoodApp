import React from 'react'
import Fooditem from './Fooditem';

function Foodlist({foodData,setfoodID}) {
  return (
    <div>
        
    {foodData.map((food)=>(
        <Fooditem setfoodID={setfoodID} fooddata ={food} key={food.title}/>
      ))}
    </div>
  )
}

export default Foodlist;