import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        theme: true,
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;