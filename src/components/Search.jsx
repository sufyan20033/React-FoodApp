import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "&apiKey=3edbbb67feeb4fe5b864699f4ca13afb"

//https://api.spoonacular.com/recipes/complexSearch?query=burger&apiKey=3edbbb67feeb4fe5b864699f4ca13afb

function Search({setfoodData}) {
    const [query, setQuery] = useState("");

    useEffect(()=>{
        async function Fetchfood(){
            const res = await fetch(`${URL}?query=${query}${API_KEY}`);
            const data = await res.json();
            //console.log(data.results);
            setfoodData(data.results);
        }
        Fetchfood()
    } ,[query])
  return (
    <div>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} />
    </div>
  )
}

export default Search