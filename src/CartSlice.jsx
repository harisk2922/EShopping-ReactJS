import { createSlice } from '@reduxjs/toolkit';

// Define the cart slice with initial state and reducers
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize cart items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure name, image, and cost from the payload
      const existingItem = state.items.find(item => item.name === name); // Check if the item already exists in the cart

      if (existingItem) {
        existingItem.quantity++; // If item exists, increase its quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // If item doesn't exist, add a new item with quantity 1
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // Remove item from cart based on its name
    },

    // Reducer to update the quantity of an existing item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure name and new quantity from the payload
      const itemToUpdate = state.items.find(item => item.name === name); // Find the item in the cart

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export the action creators for adding, removing, and updating item quantities
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be used in the Redux store
export default CartSlice.reducer;
