import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // safer access
  const restaurantInfo =
    resInfo?.cards?.find(
      (card) => card?.card?.card?.info
    )?.card?.card?.info;

  if (!restaurantInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  // menu items (itemCards) are nested deeper, so we need to find them dynamically
  // regluarcards are basically the main content cards, containing (Recomended, bestseller etc (all categories))
  const regularCards =
    resInfo?.cards?.find(
      (card) => card?.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  //  console.log(regularCards);

  // find itemCards dynamically since their position can vary 
  // itemcards are the food items, containing name, price etc
  const itemCards =
    regularCards?.find(
      (card) => card?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

  // console.log(itemCards);

  // categories are the only selected cards with type "ItemCategory", they contain the category name and the items under that category

  const catgories = regularCards?.filter(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //  console.log(catgories);

  return (
    <div className="text-center menu p-6">
      <h1 className="font-bold text-3xl">{name}</h1>

      <p className="text-lg font-bold text-gray-700 mt-2">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}

      {catgories?.map((category) => 
      {return < RestaurantCategory 
      data={category?.card?.card} 
      key={category?.card?.card?.categoryId} 
      />})}
    </div>
  );
};

export default RestaurantMenu;