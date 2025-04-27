import { createContext, useState } from "react";
export const CartContext = createContext(
    {
        meals:[],
        addToCart:(meal)=>{},
        removeFromCart:(id)=>{},
        resetCart:()=>{},
        total:0
    }
);
function CartContextProvider({children}) {
    const [meals, setMeals] = useState([]);
    
    const total = meals.reduce((acc, meal) => acc + meal.price * meal.quantity, 0);

    const resetCart = () => {
        setMeals([]);
    }

    const addToCart = (meal) => {
        const existingMeal = meals.find((m) => m.id === meal.id);
        if (existingMeal) {
            setMeals((prevMeals) =>
            prevMeals.map((m) =>
                m.id === meal.id ? { ...m, quantity: m.quantity + 1 } : m
            )
            );  
        } else {
            setMeals((prevMeals) => [...prevMeals, { ...meal, quantity: 1 }]);
        }
    };
    const removeFromCart = (id) => {
        const existingMeal = meals.find((m) => m.id === id);
        if (existingMeal && existingMeal.quantity > 1) {
            setMeals((prevMeals) =>
            prevMeals.map((m) =>
                m.id === id ? { ...m, quantity: m.quantity - 1 } : m
            )
            );
        } else {
            setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
        }

    };
    return (
      <CartContext.Provider value={{ meals, addToCart, removeFromCart, total, resetCart }}>
        {children}
      </CartContext.Provider>
    );
}
export default CartContextProvider;