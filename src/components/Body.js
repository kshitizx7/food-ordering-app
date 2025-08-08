import Restro_card from "./Restro_card";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";

const Body = () => {
    const[listofRestaurents,setlistofRestaurents] = useState([]);
    const[searchText,setSearchText] = useState("");
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    } , [])


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0595596&lng=72.8295287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json); // Inspect this to understand structure if needed

        const cards = json?.data?.cards || [];

        // Safely find the card that has the restaurant list
        const restaurantCard = cards.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants) {
            setlistofRestaurents(restaurants);
            setFilteredRestaurants(restaurants);
        } else {
            console.warn("⚠️ Could not find restaurants in API response.");
        }
    };

            // SHIMMER
    return  listofRestaurents.length === 0 ? ( <Shimmer/> ) : (
        <div className="Body">
            <div className="filters">
                <div className="search">
                    <input 
                    type="text" 
                    className="input-bar"
                    placeholder="Search by name or cuisine..."
                    value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}
                    />
                    <button 
                        className="search-button"
                        onClick={() => {
                            const filtered = listofRestaurents.filter((res) => {
                                const name = res.info.name.toLowerCase();
                                const cuisine = res.info.cuisines.join(" ").toLowerCase();
                                return (
                                    name.includes(searchText.toLowerCase()) ||
                                    cuisine.includes(searchText.toLowerCase())
                                )
                            })
                            setFilteredRestaurants(filtered);
                        }}
                        >Search
                    </button>
                </div>   
                <button 
                    className="filter-btn"
                    onClick={() => { 
                        // here we are filtering the listofRestaurents to only those with avgRating > 4;
                        const topRated = listofRestaurents.filter( (res) => { return res.info.avgRating > 4 });
                        // this fxn setListofRestaurents take the updated data and re-render the screen 
                        setlistofRestaurents(topRated);
                    }}
                >
                    Top Rated Restaurants
                </button>

            </div>
            
            <div className="restro-container">
                {
                    filteredRestaurants.map(  (restaurant) => <Restro_card key={restaurant.info.id} resData = {restaurant}/>)
                }
            </div>
        </div>
    )
}
export default Body;