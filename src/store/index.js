import { configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./details/detailsSlice";
import { errorReducer } from "./error/error-slice";
import { finderReducer } from "./finder/finder-slice";
import { projectReducer } from "./project/project-slice";

import { themeReducer } from "./theme/theme-slice";
import { touchReducer } from "./touch/touch-slice";

export const store = configureStore({
  reducer: {
    themeSlice: themeReducer,
    touchSlice: touchReducer,
    finderSlice: finderReducer,
    projectSlice: projectReducer,
    detailsSlice: detailsReducer,
    errorSlice: errorReducer,
  },
});