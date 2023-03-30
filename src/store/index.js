import { configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./details/detailsSlice";
import { errorReducer } from "./error/error-slice";
import { finderReducer } from "./finder/finder-slice";
import { pageReducer } from "./page/page-slice";
import { paginatedReducer } from "./project/paginated-slice";
import { projectReducer } from "./project/project-slice";

import { themeReducer } from "./theme/theme-slice";
import { touchReducer } from "./touch/touch-slice";

import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    themeSlice: themeReducer,
    touchSlice: touchReducer,
    finderSlice: finderReducer,
    projectSlice: projectReducer,
    detailsSlice: detailsReducer,
    errorSlice: errorReducer,
    pageSlice: pageReducer,
    paginatedSlice: paginatedReducer
  },
  middleware: customizedMiddleware
});