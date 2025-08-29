import { useParams } from "react-router";
import useMenuInfo from "../customHooks/useMenuInfo";

const RestroMenu = () => {
  const { resId } = useParams();
  const menu = useMenuInfo(resId);

  const { name, avgRating, costForTwoMessage, cuisines, areaName } =
    menu?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    menu?.data?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards ||
    [];
    console.log(itemCards);
    
  return (
    <div className="px-6 py-8 bg-gray-50 min-h-screen">
      {/* Restaurant Header */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-gray-500 text-sm mt-1">
          {cuisines?.join(", ")} • {areaName}
        </p>
        <div className="flex items-center gap-4 mt-4">
          <span
            className={`px-3 py-1 rounded-lg text-sm font-medium ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600 font-medium">{costForTwoMessage}</span>
        </div>
      </div>

      {/* Menu */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🍴 Menu
        </h2>
        <ul className="divide-y divide-gray-200">
          {itemCards.map((item) => (
            <li
              key={item?.card?.info?.id}
              className="py-4 flex items-center justify-between hover:bg-gray-50 rounded-lg px-2 transition-all"
            >
              <span className="text-gray-700 font-medium">
                {item?.card?.info?.name}
              </span>
              <span className="text-gray-900 font-semibold">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
