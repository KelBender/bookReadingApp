import { configureStore } from "@reduxjs/toolkit";

import bookListSlice from "./reducers";

//console.log(bookListSlice);

export const store = configureStore({
    reducer: bookListSlice.reducer,
  });

