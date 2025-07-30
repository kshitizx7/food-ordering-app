import { CDN_URL } from "../utils/constants";

const Restro_card = (props) => {
    const {resData} = props;
    const {name,areaName,cloudinaryImageId,avgRating,cuisines,sla} = resData.info;
    return (
        <div className="restro-card">
            
            <img 
                className="food-image"
                alt="food-image"
                src={CDN_URL+cloudinaryImageId}
            />
            <div className="restro-name">{name}</div>
            <div className="rating-time">{avgRating}⭐ </div>
            <div className="cuisine">{cuisines.join(", ")} . <span className="deliveryTime">{sla.deliveryTime} Mins</span> </div>
            <div className="location">{areaName}</div>

        </div>
    )
}
export default Restro_card;