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

    // console.log(resInfo);


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

    // const { itemCards } = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    // console.log(itemCards);
    // 🔹 Get ALL menu sections (categories)
    const menuSections =
    resInfo?.cards
        ?.find((c) => c?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // 🔹 Extract all items from all categories
    const itemCards = menuSections
    .map((section) => section?.card?.card?.itemCards)
    .filter(Boolean) // remove undefined
    .flat(); // merge all arrays

    console.log(menuSections);

    // 🔥 🔹 REMOVE DUPLICATES (IMPORTANT)
    const uniqueItemCards = itemCards.filter(
    (item, index, self) =>
        index ===
        self.findIndex(
        (t) => t?.card?.info?.id === item?.card?.info?.id
        )
    );

    // ✅ Use this in UI
    console.log(uniqueItemCards);


        
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {uniqueItemCards.map((item) => 
                <li key={item?.card?.info?.id}>
                   <h3> {item?.card?.info?.name}</h3> - {"Rs."}
                    {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    <h5>{item?.card?.info?.description}</h5>
                </li>)}
            
            </ul>
        </div>
    )
}

export default RestaurantMenu;