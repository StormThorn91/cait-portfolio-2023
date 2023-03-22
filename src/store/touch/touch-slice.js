import { createSlice } from "@reduxjs/toolkit";

export const touchSlice = createSlice({
    name: 'touchSlice',
    initialState: {
        touch: false,
    },
    reducers: {
        setTouch: (state, action) => {
            state.touch = action.payload
        }
    }
})

export const touchReducer = touchSlice.reducer;
export const { setTouch } = touchSlice.actions;