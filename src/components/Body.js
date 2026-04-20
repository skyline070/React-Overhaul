import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // 🔹 State
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  console.log("Body Rendered");

  // 🔹 Fetch data when offset changes
  useEffect(() => {
    console.log("Offset changed:", offset);
    fetchData(offset);
  }, [offset]);

  const fetchData = async (offsetValue = 0) => {
    if (loading) return; // 🔹 prevent multiple API calls

    setLoading(true);
    console.log("Fetching data for offset:", offsetValue);

    try {
      const data = await fetch(
        `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=${offsetValue}&is-seo-homepage-enabled=true&lat=28.3360134&lng=79.4108748&carousel=true&third_party_vendor=1`
      );

      if (!data.ok) {
        console.error("API failed");
        return;
      }

      const json = await data.json();

      const restaurants =
        json?.data?.cards
          ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          ?.find((res) => res !== undefined) || [];

      console.log("New restaurants:", restaurants.length);

      // 🔹 append data (infinite scroll)
      setListOfRestaurants((prev) => [...prev, ...restaurants]);
      setFilteredRestaurant((prev) => [...prev, ...restaurants]);

    } catch (error) {
      console.error("Fetch failed:", error);
    }

    setLoading(false);
  };

  // 🔹 Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolling...", window.scrollY);

      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !loading
      ) {
        console.log("Reached bottom ✅");
        setOffset((prev) => prev + 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // 🔹 Loading UI
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      {/* 🔹 Debug UI */}
      {process.env.NODE_ENV === "development" && (
        <h3>Offset: {offset}</h3>
      )}

      <div className="filter">

        {/* 🔹 Search */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.2
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* 🔹 Cards */}
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>

      {/* 🔹 Bottom loader */}
      {loading && <h2 style={{ textAlign: "center" }}>Loading more...</h2>}
    </div>
  );
};

export default Body;