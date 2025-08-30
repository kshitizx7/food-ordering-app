import { useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";
import useMenuInfo from "../customHooks/useMenuInfo";


const colapse = () => {
  console.log("clicked"); 
}

const RestroMenu = () => {
const { resId } = useParams();
const menu = useMenuInfo(resId);
// console.log("menu: ",menu);

const list = menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

const itemList = list.filter(
item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log("itemList : ", itemList);

const itemCards = itemList[0]?.card?.card?.itemCards
console.log("cards",itemCards);



// Restaurant Info
const restaurantInfoCard = menu?.data?.cards?.find(
  (c) => c?.card?.card?.info
);

const { name, avgRating, costForTwoMessage, cuisines, areaName, cloudinaryImageId } =
  restaurantInfoCard?.card?.card?.info || {};

return (
  <div className="">
    {/* Menu Header */}
      <div className=" mx-15 m-2 p-2 flex justify-between h-70">
        <div className="w-[70%] my-2 p-2 font-extrabold  text-7xl  shadow-bl-2xl">
        {name}
        </div> 
        <div className="w-[30%] ">
          <img className="h-full w-full rounded-xl" src={CDN_URL+cloudinaryImageId}/>
        </div>
      </div>

      <div className="m-2 border-2 border-gray-400 shadow-2xl rounded-2xl mx-15 bg-gray-100 ">
          <div className="m-1 p-2 text-lg  font-bold ">
            {avgRating}⭐ - {costForTwoMessage}
          </div>
          <div className=" m-2 p-1 font-medium ">
             🏙️{areaName}
          </div>
          <div className="m-2 p-1 text-lg font-medium">🍽️{cuisines}</div>
      </div>        
      


    {/* Menu body */}
    <div>
      {
        itemList.map(
          (category , index) => (
              <div className="mx-15" key={category?.card?.card?.categoryId || index}>
                <div className="mt-4 border-2 border-gray-400 rounded-full flex justify-between items-center" onClick={colapse}>
                  <div  className=" mx-2 p-2  text-xl font-bold cursor-pointer" >
                    {category?.card?.card?.title} 
                  </div>
                  <div className="mx-4 cursor-pointer" >
                    🔻
                  </div>
                </div>

                {/*items  */}
                {
                  itemCards.map(
                    items => (
                      <div className="h-55 flex m-2 p-4 border-2 border-gray-400 rounded-2xl " key={items?.card?.info?.id}>
                        <div className="w-[85%]">
                          <div className="text-2xl font-bold text-gray-700">{items?.card?.info?.name}</div>
                          <div className="font-bold">₹{items?.card?.info?.price/100 || items?.card?.info?.defaultPrice/100}</div>
                          <div className="font-bold text-s text-green-600">⭐{items?.card?.info?.ratings?.aggregatedRating?.rating} ({items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>
                          <div className="font-semibold text-gray-500 text-lg">{items?.card?.info?.description}</div>
                        </div>
                        <div className=" w-[15%] ml-4  relative rounded-2xl ">
                          <button className="absolute  font-extrabold cursor-pointer text-2xl mt-39 rounded-lg px-17 py-1 mx-5 bg-gray-200 hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in-out">ADD</button>
                            <img className="  w-full h-full  rounded-4xl" src={CDN_URL + items?.card?.info?.imageId} />
                        </div>
                      </div>
                    )
                  )
                }
              </div>
          )
        )
      }
    </div>
  </div>
);
};

export default RestroMenu;
