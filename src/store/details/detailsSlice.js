import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
    name: 'detailsSlice',
    initialState: {
        profile: false,
        contact: false
    },
    reducers: {
        setProfile: (state, action) => {
            state.profile = action.payload
        },

        setContact: (state, action) => {
            state.contact = action.payload
        }
    }
})

export const detailsReducer = detailsSlice.reducer;
export const { setProfile, setContact } = detailsSlice.actions;