import { createSlice } from "@reduxjs/toolkit";

export default bookListSlice = createSlice({
  name: "bookList",
  initialState: {
    value: {},
  },
  reducers: {
    addBook: (state) => {
      console.log("add Book");
      state.bookList.book1 = "book1";
    },
    deleteBook: (state) => {
      console.log("delete Book");
      delete state.bookList.book1;
    },
  },
});

export const selectValue = (state) => state.bookList.value

console.log("f", selectValue, state)

export const { addBook, deleteBook } = bookListSlice.actions

