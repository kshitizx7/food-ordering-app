import resList from "../utils/mockData";
import Restro_card from "./Restro_card";
import {useState} from "react";

const Body = () => {
    const[listofRestaurents,setlistofRestaurents] = useState(resList);
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