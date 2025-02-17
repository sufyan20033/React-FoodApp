import React from 'react'

function Fooditem({fooddata}) {
  return (
    <div>
        <div>
        <h4>{fooddata.title}</h4>
        <img src={fooddata.image} /><br></br>
        <button>View Reciepe</button>
        </div>
    </div>
  )
}

export default Fooditem;