import { useState, useEffect } from "react";
import RestroItems from "./RestroItems";

const RestroCategory = ({ itemList }) => {
  const [shut, setShut] = useState(false);
  const colapse = () => {
    console.log("clicked");
    setShut(!shut);
  };

  return (
    <div>
      {itemList.map((category, index) => {
        const itemCards = category?.card?.card?.itemCards;
        return (
          <div
            className="mx-45 "
            key={category?.card?.card?.categoryId || index}
          >
            <div className="shadow-gray-300 shadow-xl mb-7 mt-4 border-2 border-gray-400 rounded-full flex justify-between items-center">
              <div
                className=" mx-2 p-2  text-xl font-bold cursor-pointer"
                onClick={colapse}
              >
                {category?.card?.card?.title}
              </div>
              <div className="mx-4 cursor-pointer">{shut ? "🔺" : "🔻"}</div>
            </div>

            {/* items  */}
            {shut && <RestroItems itemCards={itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default RestroCategory;
