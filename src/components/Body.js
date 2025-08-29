import Restro_card from "./Restro_card";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useRestaurentInfo from "../customHooks/useRestaurentInfo";
import useOnlineStatus from "../customHooks/useOnlineStatus.js";
import OfflinePage from "./OfflinePage.js";

const Body = () => {
  const data = useRestaurentInfo();
  const [listofRestaurents, setListofRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const status = useOnlineStatus();

  useEffect(() => {
    setListofRestaurents(data);
    setFilteredRestaurants(data);
  }, [data]);

  if (status === false) return <OfflinePage />;

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-6 py-6 bg-gray-50 min-h-screen">
      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search */}
        <div className="flex items-center w-full md:w-1/2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-l-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
            placeholder="Search by name, cuisine, or location..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-xl shadow-md hover:bg-yellow-300 transition-all duration-300"
            onClick={() => {
              const filtered = listofRestaurents.filter((res) => {
                const name = res.info.name.toLowerCase();
                const cuisine = res.info.cuisines.join(" ").toLowerCase();
                const loc = res.info.areaName.toLowerCase();
                return (
                  name.includes(searchText.toLowerCase()) ||
                  cuisine.includes(searchText.toLowerCase()) ||
                  loc.includes(searchText.toLowerCase())
                );
              });
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated */}
        <button
          className="px-5 py-2 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
          onClick={() => {
            const topRated = listofRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaurents(topRated);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>
      </div>

      {/* Restaurants Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restroMenu/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="hover:scale-[1.02] transition-transform duration-300"
          >
            <Restro_card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
