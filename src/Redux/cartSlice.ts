import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price, image, category } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          title,
          price,
          image,
          category,
          quantity: 1,
        });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const updatedItem = { ...state.items[itemIndex], quantity };

        if (updatedItem.quantity <= 0) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex] = updatedItem;
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(state.items));
      
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
