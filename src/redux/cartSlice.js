import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // key = itemId, value = { item, quantity }
    items: {}, // 🔥 object instead of array
  },

  reducers: {
    // ADD ITEM (increase quantity if already exists)
    addItem: (state, action) => {
      const id = action.payload.card.info.id;

      // If item already exists → increase quantity
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
      // else create new entry
      else {
        state.items[id] = {
          item: action.payload,
          quantity: 1,
        };
      }
    },

    // REMOVE ITEM (decrease quantity or delete)
    removeItem: (state, action) => {
      const id = action.payload;

      if (!state.items[id]) return;

      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      } else {
        delete state.items[id];
      }
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
