import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState(resList);

  const handleSearch = () => {
    const filtered = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredList(filtered);
  };

  return (
    <div className="body">

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




{/* not using keys (not acceptable) <<<< index as key <<<< unique id (best practice) */}


      {/* 🍔 Restaurant Cards */}
      <div className="restaurant-container">
        {filteredList.map((restaurant) => (
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