import { useState } from "react"
import Search from "./components/search"
import Foodlist from "./components/list"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Innercontainer from "./components/innercontainer"





function App() {
  const [foodData, setfoodData] = useState([])

  return (
    <div className="App">
      <Navbar setfoodData={setfoodData}/>
    {/* <Search setfoodData={setfoodData} /> */}
    <Container>
      <Innercontainer>

      <Foodlist foodData={foodData}/>
      </Innercontainer>
    </Container>
    </div>
  )
}

export default App