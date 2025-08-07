import Restro_card from "./Restro_card";
import {useState,useEffect} from "react";

const Body = () => {
    const[listofRestaurents,setlistofRestaurents] = useState([]);


    useEffect(() => {
        fetchData();
    } , [])


    const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
    } else {
        console.warn("⚠️ Could not find restaurants in API response.");
    }
};


    return (
        <div className="Body">
            <button 
            className="filter-btn"
            onClick={() => { 
                // here we are filtering the listofRestaurents to only those with avgRating > 4;
                const filteredList = listofRestaurents.filter( (res) => { return res.info.avgRating > 4 });
                // this fxn setListofRestaurents take the updated data and re-render the screen 
                setlistofRestaurents(filteredList);
            }}
            >
                Top Rated Restaurants
            </button>
            <div className="restro-container">
                {
                    listofRestaurents.map(  (restaurant) => <Restro_card key={restaurant.info.id} resData = {restaurant}/>)
                }
            </div>
        </div>
    )
}
export default Body;