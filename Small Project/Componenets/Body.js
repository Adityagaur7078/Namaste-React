import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.19513389999999&lng=78.19209719999999&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await data.json();

  console.log(json);

  // 🔍 Find correct card dynamically
  const restaurants =
    json?.data?.cards
      ?.map((card) => card?.card?.card)
      ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)
      ?.gridElements?.infoWithStyle?.restaurants || [];

  setListOfRestaurants(restaurants);
};

  // 🔍 Search Function
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestaurants(filtered);
  };

  return (
    <div className="body">

      {/* ⭐ Top Bar (Filter + Search) */}
      <div className="top-bar">

        {/* ⭐ Filter Button */}
        <div className="filter">
          <button
            className="btn-filter"
            onClick={() => {
              const topRated = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setListOfRestaurants(topRated);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        {/* 🔍 Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />

          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>

      </div>

{/* not using keys (not acceptable) <<<< index as key <<<< unique id (best practice) */}

      {/* 🍔 Restaurant Cards */}
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>

    </div>
  );
};

export default Body;