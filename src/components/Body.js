import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // 🔹 State
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  // Whenever state vaiables updates, react triggers a reconciliation cycle(re-renders the component)
  // console.log("Body Rendered", listOfRestaurants);

  // 🔹 Fetch data once
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3360134&lng=79.4108748&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      const restaurants =
        json?.data?.cards
          ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          ?.find((res) => res !== undefined) || [];

        // console.log("Restaurants:", restaurants.length);

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);

    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

    const { loggedInUser,setUserName } = useContext(UserContext);

  // 🔹 Loading UI
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      <div className="filter flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4">

        {/* 🔹 Search */}
        <div className="search flex items-center gap-3 bg-white shadow-md rounded-xl px-4 py-3">
          
          <input
            type="text"
            placeholder="Search restaurants..."
            className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-green-500 w-62.5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="px-5 py-2 bg-green-400 text-white font-medium rounded-lg hover:bg-green-500 transition-all duration-200"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        {/* 🔹 Top Rated */}
        <div className="top-rated">
          <button
            className="px-5 py-3 bg-orange-400 text-white font-medium rounded-xl shadow-md hover:bg-orange-500 transition-all duration-200"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.2
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            ⭐ Top Rated Restaurants
          </button>
        </div>

        {/* Changing Username Dynamically */}
        <div className="Username">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="border border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-green-500 w-62.5"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          
        </div>

      </div>

      {/* 🔹 Cards */}
      <div className="res-container flex flex-wrap px-1">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
             {/* if the restaurant is promoted then add a promoted label to it  */}

            {restaurant?.info?.promoted ? (
              <RestaurantCardWithPromotedLabel resData={restaurant} />
              
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;