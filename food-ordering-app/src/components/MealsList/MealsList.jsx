import { useState, useEffect } from "react"
import MealItem from "../Meal/Meal";
import "./MealsList.css";



function MealsList(){
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3000/meals")
        .then((response) => response.json())
        .then((data) => {
          setMeals(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    return (
      <div className="meals-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && meals.length === 0 && <p>No meals found!</p>}
        {!loading && !error && meals.length > 0 && (
           meals.map((meal) => (
          <MealItem
            key={meal.id}
            {...meal}
          />
        )))}
      </div>
    );
}
export default MealsList;