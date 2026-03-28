import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // 🔍 Search Function
  const handleSearch = () => {
    const filtered = resList.filter((res) =>
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
              const topRated = resList.filter(
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