import React, { useState, useEffect } from 'react';

function Fooddetail({ foodID }) {
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "?apiKey=3edbbb67feeb4fe5b864699f4ca13afb";

  useEffect(() => {
    if (!foodID) return; // Prevent fetching if foodID is null

    async function fetchRecipe() {
      try {
        setLoading(true);
        const res = await fetch(`${URL}${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        
        const data = await res.json();
        console.log(data); // Debugging
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [foodID]); // ✅ Runs when foodID changes

  if (loading) return <p>Loading...</p>;
  if (!food) return <p>No recipe found.</p>;

  return (
    <div>
      <h2>{food.title}</h2>
      <img src={food.image} alt={food.title} width="200" />
      <h5>{food.readyInMinutes} Minutes</h5>
      <h5>{food.servings} Person Serving</h5>
      <h5>{food.pricePerServing} $ / Serving</h5>
      <p>{food.diets} </p>
      <p>{food.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      {/* Cooking Instructions Section */}
      <h3>Cooking Instructions: </h3>
      {food.analyzedInstructions.length > 0 ? (
        <ul>
          {food.analyzedInstructions[0].steps.map((step, index) => (
            <li key={index}>{step.step}</li>
          ))}
        </ul>
      ) : (
        <p>No instructions available.</p>
      )}
      
    </div>
  );
}

export default Fooddetail;
