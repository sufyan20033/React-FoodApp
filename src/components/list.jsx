import React from 'react'
import Fooditem from './Fooditem';

function Foodlist({foodData}) {
  return (
    <div>
        
    {foodData.map((food)=>(
        <Fooditem fooddata ={food}/>
      ))}
    </div>
  )
}

export default Foodlist;