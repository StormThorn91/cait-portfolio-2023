import { createSlice } from "@reduxjs/toolkit";

export const paginatedSlice = createSlice({
    name: 'paginatedSlice',
    initialState: {
        paginatedList: [],
        paginated: {},
        next: true,
        prev: false
    },
    reducers: {
        setPaginatedList: (state, action) => {
            state.paginatedList = action.payload
        },

        setNext: (state, action) => {
            state.next = action.payload
        },

        setPrev: (state, action) => {
            state.prev = action.payload
        }
    }
})

export const paginatedReducer = paginatedSlice.reducer;
export const { setPaginatedList, setNext, setPrev } = paginatedSlice.actions;