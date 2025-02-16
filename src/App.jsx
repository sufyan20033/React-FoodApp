import { useState } from "react"
import Search from "./components/search"




function App() {
  const [foodData, setfoodData] = useState([])

  return (
    <div className="App">
    <Search setfoodData={setfoodData} />
    {foodData.map((food)=>(
      <div>
      <h4>{food.title}</h4>
      <img src={food.image} />
      </div>
    ))}
    </div>
  )
}

export default App
