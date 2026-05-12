import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

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

  // 🔹 Get ALL menu sections (categories)
 // 🔹 Get ALL menu sections (categories)
const categories =
  resInfo?.cards
    ?.find((c) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

// 🔹 Extract all actual food items from all categories
const itemCards = categories
  .filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
.flatMap(
    (category) => category?.card?.card?.itemCards || []
  );
  console.log(categories);
//   console.log(itemCards);

  // 🔹 Extract all menu items from all categories
  
  // 🔥 🔹 REMOVE DUPLICATES (IMPORTANT)
  const uniqueItemCards = categories.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        (t) => t?.card?.info?.id === item?.card?.info?.id
      )
  );

  // ✅ Use this in UI
//   console.log(uniqueItemCards);

  return (
    <div className="menu p-6">

      <h1 className="font-bold text-3xl">{name}</h1>

      <p className="text-lg text-gray-700 mt-2">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2 className="font-bold text-2xl mt-6 mb-4">Menu</h2>

      <ul>
        {uniqueItemCards.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="border-b border-gray-300 py-4"
          >
            <h3 className="font-semibold text-lg">
              {item?.card?.info?.name}
            </h3>

            <p className="text-gray-700">
              Rs.
              {(item?.card?.info?.price ||
                item?.card?.info?.defaultPrice) / 100}
            </p>

            {/* <h5>{item?.card?.info?.description}</h5> */}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default RestaurantMenu;