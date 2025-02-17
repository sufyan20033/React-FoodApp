import { useState } from "react"
import Search from "./components/search"
import Foodlist from "./components/list"




function App() {
  const [foodData, setfoodData] = useState([])

  return (
    <div className="App">
    <Search setfoodData={setfoodData} />
    <Foodlist foodData={foodData}/>
    </div>
  )
}

export default App
