import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  // cart object from redux
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // convert object → array for UI
  const itemsArray = Object.values(cartItems);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">Cart Items</h1>

      <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
        {/* Clear Cart */}
        <button
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {/* Empty State */}
        {itemsArray.length === 0 && (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}

        {/* pass grouped items */}
        <ItemList items={itemsArray.map((i) => i.item)} />
      </div>
    </div>
  );
};

export default Cart;
