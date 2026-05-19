import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  // cart state
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddToCart = (item) => {
    // Dispatch an action to add item to the cart
    // console.log("clicked on add to cart", item);
    dispatch(addItem(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="space-y-6">
      {/* Body */}

      {items?.map((item) => {
        const info = item?.card?.info;

        // how many times item exists in cart
        // cartItems is OBJECT now, not array
        const quantity = cartItems[info.id]?.quantity || 0;

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
                ₹{((info?.price || info?.defaultPrice || 0) / 100).toFixed(2)}
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

              {/* ADD / QUANTITY CONTROLLER */}
              {quantity === 0 ? (
                /* ADD BUTTON */
                <button
                  className="absolute -bottom-3 bg-white text-green-600 font-extrabold tracking-wide px-6 py-2.5 rounded-2xl shadow-md border border-gray-200 hover:bg-green-50 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  onClick={() => handleAddToCart(item)}
                >
                  ADD +
                </button>
              ) : (
                /* QUANTITY CONTROLLER */
                <div className="absolute -bottom-3 flex items-center justify-between w-26.25 bg-white px-2 py-2 rounded-2xl shadow-lg border border-gray-200">
                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => handleRemoveFromCart(info.id)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-red-500 text-xl font-bold hover:bg-red-100 hover:text-red-600 transition-colors duration-100"
                  >
                    -
                  </button>

                  {/* QUANTITY */}
                  <span className="text-sm font-bold text-gray-800 min-w-5 text-center">
                    {quantity}
                  </span>

                  {/* ADD BUTTON */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-7 h-7 flex items-center justify-center rounded-full text-green-600 text-xl font-bold hover:bg-green-100 hover:text-green-700 transition-colors duration-100"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
