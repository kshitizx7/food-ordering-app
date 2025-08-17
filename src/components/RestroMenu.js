import { useEffect , useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";


const RestroMenu = () => {

    const[menu,setMenu] = useState(null);
    useEffect(() => {
        fetchData();
    } , []);

    const { resId } = useParams();
    
    // if(restroData === null) return <Shimmer/>

    const fetchData = async () => {
        let data  =  await fetch(MENU_URL + resId)
        const json = await data.json();

        setMenu(json);
    }
    const { name, avgRating, costForTwoMessage } = 
        menu?.data?.cards[2]?.card?.card?.info || {};

const itemCards =
    menu?.data?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card.itemCards || [];

    return (
        <div>
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul className="menuUl">
                {
                    itemCards.map((item)=> {
                        return (
                            <li className="menuLi" key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - ₹
                            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RestroMenu; 6