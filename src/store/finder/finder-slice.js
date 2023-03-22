import { createSlice } from "@reduxjs/toolkit";

export const finderSlice = createSlice({
    name: 'finderSlice',
    initialState: {
        finder: false,
    },
    reducers: {
        setFinder: (state, action) => {
            state.finder = action.payload
        }
    }
})

export const finderReducer = finderSlice.reducer;
export const { setFinder } = finderSlice.actions;