import { CDN_URL } from "../utils/constants";

const RestroItems = ({ itemCards }) => {
  return (
    <div>
      {itemCards.map((items) => (
        <div
          className="h-55 flex m-2 p-4 border-b-2 border-gray-400 rounded-2xl "
          key={items?.card?.info?.id}
        >
          <div className="w-[85%]">
            <div className="text-2xl font-bold text-gray-700">
              {items?.card?.info?.name}
            </div>

            <div className="font-bold">
              ₹
              {items?.card?.info?.price / 100 ||
                items?.card?.info?.defaultPrice / 100}
            </div>

            <div className="font-bold text-s text-green-600">
              ⭐{items?.card?.info?.ratings?.aggregatedRating?.rating} (
              {items?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
            </div>

            <div className="font-semibold text-gray-500 text-lg">
              {items?.card?.info?.description}
            </div>
          </div>

          <div className="w-[15%] ml-4 relative rounded-2xl border border-gray-300 overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={CDN_URL + items?.card?.info?.imageId}
            />

            <button
              className="absolute bottom-2 left-1/2 -translate-x-1/2
                                    px-4 py-2 rounded-lg text-sm font-semibold
                                    bg-white text-green-600 border border-green-500
                                    hover:bg-green-500 hover:text-white
                                    transition-all duration-300 shadow-md"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroItems;
