import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

import pickDocument from "../components/DocumentPicker";
import { useBookListContext } from "../contexts/BookListContext";

const LibraryScreen = () => {
  const { bookList, addBook, moveObjectToFirst } = useBookListContext();

  const addPdf = async () => {
    //console.log("starting function");

    try {
      //console.log("starting pickDocument");

      const result = await pickDocument();

      //console.log("pickDocument done");
      //console.log("\nFile-Stats: \n", result);

      let type = result.assets[0].mimeType;
      let name = result.assets[0].name;
      let uri = result.assets[0].uri;
      //console.log(type, uri, name);
      addBook(uri, name);

      //console.log("LENGTH: ", bookList[bookList.length - 1])

      //moveObjectToFirst(object=bookList[bookList.length])

      //console.log(bookList);
    } catch (error) {
      console.error("Error adding PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>Search</Text>
      <Pressable
        style={styles.addBookPressable}
        onPress={addPdf}
        android_ripple={{ color: "#242424", radius: 185 }}
      >
        <Text style={styles.addBookText}>Add Book from local File</Text>
      </Pressable>
      <Text style={styles.discoverText}>Discover</Text>
      {
        <Text style={styles.storage}>
          {bookList
            .map(
              (book, index) =>
                `${book.uri}, Name: ${book.name}, ID: ${book.id} \n\n`
            )
            .join(", ")}
        </Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  storage: {
    color: "white",
    fontSize: 15,
    paddingLeft: 20,
  },
  bookText: {
    padding: 10,
    marginTop: 10,
    fontSize: 20,
  },
  pdf: {
    margin: 20,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "white",
  },
  searchText: {
    color: "white",
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },
  addBookPressable: {
    borderWidth: 2,
    borderColor: "rgb(28, 28, 28)",
    borderRadius: 15,
    backgroundColor: "rgb(28, 28, 28)",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  addBookText: {
    padding: 5,
    fontSize: 20,
    color: "rgb(139, 138, 140)",
  },
  discoverText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 25,
    marginTop: 45,
    borderColor: "rgb(112, 112, 112)",
    paddingBottom: 5,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default LibraryScreen;
