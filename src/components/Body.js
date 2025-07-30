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
                const filteredList = listofRestaurents.filter( (res) => { return res.info.avgRating > 4 });

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