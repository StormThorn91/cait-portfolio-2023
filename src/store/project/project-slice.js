import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState: {
        projectList: [],
        project: {}
    },
    reducers: {
        setProjectList: (state, action) => {
            state.projectList = action.payload
        },

        setProject: (state, action) => {
            state.project = action.payload
        }
    }
})

export const projectReducer = projectSlice.reducer;
export const { setProjectList, setProject } = projectSlice.actions;