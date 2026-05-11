import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  return (
    <div className="res-card m-4 p-4 w-67.5 rounded-2xl bg-gray-100 hover:bg-gray-200 hover:scale-105 transition-all duration-200 shadow-md flex flex-col cursor-pointer">

      {/* Restaurant Image */}
      <img
        className="res-logo rounded-xl w-full h-45 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Content */}
      <div className="flex flex-col grow mt-3">

        {/* Restaurant Name */}
        <h3 className="font-bold text-lg line-clamp-2 min-h-14">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-gray-600 text-sm line-clamp-2 min-h-11 mt-1">
          {cuisines.join(", ")}
        </p>

        {/* Extra Details */}
        <div className="mt-auto pt-3 space-y-1">
          <h4 className="font-medium">⭐ {avgRating}</h4>
          <h4 className="text-gray-700">{costForTwo}</h4>
          <h4 className="text-gray-700">{sla?.slaString}</h4>
        </div>

      </div>
    </div>
  );
};

export default RestaurantCard;