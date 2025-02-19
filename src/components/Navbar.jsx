import React from "react";
import "./Navbar.css";
import { useState,useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "&apiKey=3edbbb67feeb4fe5b864699f4ca13afb"

const Navbar = ({setfoodData}) => {

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
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="brand">MyApp</a>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} placeholder="Search for reciepe.."/>
        <ul className="nav-links">
          <li><a href="#" className="nav-item">Home</a></li>
          <li><a href="#" className="nav-item">About</a></li>
          <li><a href="#" className="nav-item">Services</a></li>
          <li><a href="#" className="nav-item">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
