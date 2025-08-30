import { CDN_URL } from "../utils/constants";

const Restro_card = (props) => {
  const { resData } = props;
  const { name, areaName, cloudinaryImageId, avgRating, cuisines, sla } =
    resData.info;

  return (
    <div className="bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-72">
      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        alt="food"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate">{name}</h2>

        <div className="flex items-center justify-between mt-2">
          <span
            className={`px-2 py-1 rounded-lg text-sm font-medium ${
              avgRating >= 4
                ? "bg-green-300 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-sm text-white">{sla.deliveryTime} mins</span>
        </div>

        <p className="text-sm text-white mt-2 line-clamp-2">
          {cuisines.join(", ")}
        </p>

        <p className="text-sm text-white mt-1">{areaName}</p>
      </div>
    </div>
  );
};

export default Restro_card;
