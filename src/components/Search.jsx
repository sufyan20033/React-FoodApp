import React, { useEffect, useState } from 'react'




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
