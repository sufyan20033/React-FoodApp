import { useState } from "react"
import Search from "./components/search"
import Foodlist from "./components/list"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Innercontainer from "./components/innercontainer"
import Fooddetail from "./components/Fooddetail"





function App() {
  const [foodData, setfoodData] = useState([])
  const [foodID, setfoodID] = useState("715415")

  return (
    <div className="App">
      <Navbar setfoodData={setfoodData}/>
    {/* <Search setfoodData={setfoodData} /> */}
    <Container>
      <Innercontainer>
      <Foodlist foodData={foodData} setfoodID={setfoodID} />
      </Innercontainer>
      <Innercontainer>
      {foodID && <Fooddetail foodData={foodData} foodID={foodID}/>}
      </Innercontainer>

    </Container>
    </div>
  )
}

export default App