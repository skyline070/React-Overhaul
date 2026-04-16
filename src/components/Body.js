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
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.83950&lng=78.76990&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
  };

  // Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }
  
  return listOfRestaurants.length === 0 ? <Shimmer /> :(
    <div className="body">
      
      <div className="filter">
        <div className="search">
          <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button 
          onClick={() => {
            // Filter the restaurant cards and updates the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
             setFilteredRestaurant(filteredRestaurant)
          }}
          >
            Search
          </button>
        </div>
        <button 
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => {
              return (
              res.info.avgRating > 4.2);
        });
          setListOfRestaurants(filteredList);
        }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
         {/* {console.log("listOfRestaurants:", listOfRestaurants)} */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} 
        />))}
      </div>
    </div>
  );
};

export default Body;