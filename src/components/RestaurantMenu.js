import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams  } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); 
    
    useEffect(() =>{
        fetchMenu ();
    }, []) 

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        // console.log(json);
        setResInfo(json.data);
    };
    if (resInfo === null) return <Shimmer />

    // 🔹 Loop through all cards to find the one that contains restaurant info
    // API response structure is dynamic, so we avoid hardcoding index like [2]
    const restaurantCard = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
    );

    // 🔹 Safely extract required fields from the found card
    // Optional chaining (?.) prevents crash if data is undefined
    // Fallback to {} ensures destructuring doesn't throw error
    const { name, cuisines, costForTwoMessage } =
    restaurantCard?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

    console.log(itemCards);

        
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."}
                    {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>)}
            
            </ul>
        </div>
    )
}

export default RestaurantMenu;