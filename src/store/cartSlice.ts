import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: string;
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
        addToCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1; // increase qty
            } else {
                state.items.push({ id, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        increaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQty: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (i) => i.id !== action.payload
                    );
                }
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
    cartSlice.actions;

export default cartSlice.reducer;