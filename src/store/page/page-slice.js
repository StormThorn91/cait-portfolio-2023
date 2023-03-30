import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: 'pageSlice',
    initialState: {
        page: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export const pageReducer = pageSlice.reducer;
export const { setPage } = pageSlice.actions;