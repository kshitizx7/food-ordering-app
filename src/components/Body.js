import Restro_card from "./Restro_card";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useRestaurentInfo from "../customHooks/useRestaurentInfo";


const Body = () => {
    const data = useRestaurentInfo();
    const[listofRestaurents,setlistofRestaurents] = useState([]);
    const[searchText,setSearchText] = useState("");
    const[filteredRestaurants,setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        setlistofRestaurents(data);
        setFilteredRestaurants(data);
    },[data])

            // SHIMMER
    return  listofRestaurents.length === 0 ? ( <Shimmer/> ) : (
        <div className="Body">

            <div className="filters">
                {/* Search Bar ANd Button */}

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
                                const loc = res.info.areaName.toLowerCase();
                                return (
                                    name.includes(searchText.toLowerCase()) ||
                                    cuisine.includes(searchText.toLowerCase()) ||
                                    loc.includes(searchText.toLowerCase())
                                )
                            })
                            setFilteredRestaurants(filtered);
                        }}
                    >
                        Search
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
                    filteredRestaurants.map(  (restaurant) => {
                        return (
                            <Link to = {`/restroMenu/${restaurant.info.id}`}  key={restaurant.info.id} style={{ textDecoration: "none", color: "inherit" }} >
                                <Restro_card resData = {restaurant}/>
                            </Link>
                        )
                    } )
                }
            </div>
        </div>
    )
}
export default Body;
