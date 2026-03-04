import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  name: string;
  images: string;
  category: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item._id === action.payload._id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;