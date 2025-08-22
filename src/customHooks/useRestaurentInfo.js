import {RESTRO_URL} from "../utils/constants";
import { useState , useEffect } from "react";

const useRestaurentInfo = () => {
    const[listofRestaurents,setListOfRestaurents] = useState([]);

    useEffect(
        () => {
            fetchdata();
        }
        ,[]
    );

    const fetchdata =  async () => {
        const data = await fetch(RESTRO_URL);
        const json = await data.json();

        
        const cards = json?.data?.cards || [];

        // Safely find the card that has the restaurant list
        const restaurantCard = cards.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants) {
            setListOfRestaurents(restaurants);
        } else {
            console.warn("⚠️ Could not find restaurants in API response.");
        }
    }

    return listofRestaurents;
}

export default useRestaurentInfo;