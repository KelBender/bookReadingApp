import { useState, createContext, useContext } from "react";

const BookListContext = createContext();

export const useBookListContext = () => {
  return useContext(BookListContext);
};

export const BookListProvider = ({ children }) => {
  const [bookList, setBookList] = useState([]);
  const [key, setKey] = useState(0);

  const moveObjectToFirst = (id) => {
    console.log("ID: ", id);

    console.log("bookList: ", bookList);

    const index = bookList.findIndex((obj) => obj.id === id);

    console.log("index", index);

    if (index !== -1) {
      const [objectToMove] = bookList.splice(index, 1);
      bookList.unshift(objectToMove);
      setBookList([...bookList]);
    }
  };
  const addBook = (uri, name, prevBookList) => {
    setBookList((prevBookList) => [
      { uri: uri, name: name, id: key },
      ...prevBookList,
    ]);
    //console.log("prevBookList", prevBookList)

    //console.log(key)
    //moveObjectToFirst(key);
    setKey((prevKey) => prevKey + 1);
  };

  const deleteBook = () => {
    if (bookList.length > 0) {
      setBookList((prevBookList) => prevBookList.slice(0, -1));
    }
  };

  return (
    <BookListContext.Provider
      value={{ bookList, addBook, deleteBook, moveObjectToFirst }}
    >
      {children}
    </BookListContext.Provider>
  );
};
