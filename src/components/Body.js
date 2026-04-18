import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState ([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState ([]);
  const [searchText, setSearchText] = useState ("");

  console.log("Body Rendered")

  useEffect (() => {
    fetchData();
  },[]);
  
const fetchData = async () => {
  try {
    // 🔹 Step 1: Call API using fetch (via CORS proxy to avoid browser restriction)
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.3360134&lng=79.4108748&carousel=true&third_party_vendor=1"
    );

    // 🔹 Step 2: Check if API response is successful
    if (!data || !data.ok) {
      console.error("API failed");
      return;
    }

    // 🔹 Step 3: Convert response to JSON
    const json = await data.json();

    // 🔹 Step 4: Extract restaurant list from dynamic API structure
    // API response has multiple cards, so we loop and find the one containing restaurants
    const restaurants =
      json?.data?.cards
        ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.find((res) => res !== undefined) || [];

    // 🔹 Step 5: Store original data (source of truth)
    setListOfRestaurants(restaurants);

    // 🔹 Step 6: Store filtered data (used for UI rendering)
    setFilteredRestaurant(restaurants);

  } catch (error) {
    // 🔹 Step 7: Handle errors (network issues, API failure, etc.)
    console.error("Fetch failed:", error);
  }
};
  
 return listOfRestaurants.length === 0 ? (
  // 🔹 If data is not loaded yet (empty array), show shimmer UI (loading state)
  <Shimmer />
) : (
  <div className="body">

    {/* 🔹 Filter + Search Section */}
    <div className="filter">

      {/* 🔹 Search Functionality */}
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          // 🔹 Update search text on every keystroke
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            // 🔹 Filter restaurants based on search text (case-insensitive)
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );

            // 🔹 Update UI with filtered results
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>

      {/* 🔹 Top Rated Filter */}
      <button
        className="filter-btn"
        onClick={() => {
          // 🔹 Filter restaurants with rating > 4.2
          const filteredList = listOfRestaurants.filter(
            (res) => res?.info?.avgRating > 4.2
          );

          // 🔹 Update UI (without modifying original data)
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
    </div>

    {/* 🔹 Restaurant List Rendering */}
    <div className="res-container">
      {/* 🔹 Map over filtered data and render RestaurantCard */}
      {filteredRestaurant.map((restaurant) => (
        <RestaurantCard
          key={restaurant?.info?.id}   // 🔹 unique key for React
          resData={restaurant}        // 🔹 pass data as props
        />
      ))}
    </div>
  </div>
);
};

export default Body;