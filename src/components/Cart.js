import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => { 

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        // Dispatch an action to clear the cart
        dispatch(clearCart());
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">Cart Items</h1>
            {/* Render cart items here */}
            <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
                <button className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;  