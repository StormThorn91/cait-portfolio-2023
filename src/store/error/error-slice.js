import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'errorSlice',
    initialState: {
        error: false,
    },
    reducers: {
        setError: (state, action) => {
            state.finder = action.payload
        }
    }
})

export const errorReducer = errorSlice.reducer;
export const { setError } = errorSlice.actions;