import { useDispatch } from "react-redux"; 
import { addItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddToCart = (item) =>{
    // Dispatch an action to add item to the cart
    // console.log("clicked on add to cart", item);
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
        {/*Body */}
        
      {items?.map((item) => {
        const info = item?.card?.info;

        return (
          <div
            key={info?.id}
            className="flex justify-between items-start border-b-2 border-gray-200 pb-2 hover:bg-gray-50 transition-all duration-200 rounded-xl p-2"
          >
            {/* Left Content */}
            <div className="w-9/12 pr-4 text-left">
              <h3 className="text-md font-semibold text-gray-800">
                {info?.name}
              </h3>

              <p className="text-sm font-medium text-gray-700 mt-1">
                ₹
                {(
                  (info?.price || info?.defaultPrice || 0) / 100
                ).toFixed(2)}
              </p>

              <p className="text-sm text-gray-500 mt-1 leading-6">
                {info?.description}
              </p>
            </div>

            {/* Right Image Section */}
            <div className="w-3/12 flex flex-col items-center relative">
              <img
                src={CDN_URL + info?.imageId}
                alt={info?.name}
                className="w-32 h-32 object-cover rounded-2xl shadow-md"
              />

              <button className="absolute -bottom-3 bg-white text-green-600 font-bold px-6 py-2 rounded-xl shadow-lg border border-gray-200 hover:bg-green-50 hover:scale-105 transition-all duration-200"
              onClick={() => handleAddToCart(item)}> 
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;