import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import useMenuInfo from "../customHooks/useMenuInfo";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
  const { resId } = useParams();
  const menu = useMenuInfo(resId);

   // Restaurant Info DATA
  const restaurantInfoCard = menu?.data?.cards?.find(
    (c) => c?.card?.card?.info
  );
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    areaName,
    cloudinaryImageId,
  } = restaurantInfoCard?.card?.card?.info || {};

  // RESTRO menu DATA
  const list =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemList = list.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      {/* Menu Header */}
      <div className=" mx-45 m-2 p-2 flex justify-between h-70">
        <div className="w-[70%] my-2 p-2 font-bold  text-7xl  drop-shadow-black">
          {name}
        </div>
        <div className="w-[30%] ">
          <img
            className="h-full w-full rounded-xl"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
      </div>

      {/* location rating cuisines */}
      <div className="m-2 border-2 border-gray-400 shadow-2xl rounded-2xl mx-45 bg-gray-100 mb-15 mt-10">
        <div className="m-1 p-2 text-lg  font-bold ">
          {avgRating}⭐ - {costForTwoMessage}
        </div>
        <div className=" m-2 p-1 font-medium ">🏙️{areaName}</div>
        <div className="m-2 p-1 text-lg font-medium">🍽️{cuisines}</div>
      </div>

      {/* Menu Headers */}
      <RestroCategory itemList={itemList} />
    </div>
  );
};

export default RestroMenu;
