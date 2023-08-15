import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import Pdf from "react-native-pdf";

import { useBookListContext } from "../contexts/BookListContext";

const HomeScreen = () => {
  const { bookList } = useBookListContext();

  const readLastItemView = ({ item }) => {
    console.log("item");
    return (
      <>
        <View style={styles.lastItemPdfView}>
          {/* <Text style={styles.readlastItemView}>{item.name}</Text>*/}
          <View style={styles.lastItemPdfDisplay}>
            <Pdf
              source={{ uri: bookList[item.id].uri }}
              page={0}
              horizontal={true}
              enablePaging={true}
              trustAllCerts={false}
              fitWidth={true}
              fitPolicy={2}
              //scale={1}
              enableRTL={true}
              singlePage={true}
              onLoadComplete={(numberOfPages, filePath) => {
                //console.log(`Number of pages: ${numberOfPages}`);
              }}
              onError={(error) => {
                console.log(error);
              }}
              style={styles.lastItemPdf}
            />
          </View>
        </View>
        <Text style={styles.lastReadInfoSettings}>...</Text>
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.homeText}>Home</Text>
        <ScrollView>
          {bookList[0] !== undefined ? (
            <>
              <Text style={styles.currentPdfText}>Current </Text>
              <View style={styles.currentPdfView}>
                <Pressable
                  style={styles.currentPdfDisplay}
                  onPress={() => console.log("PRESSED!")}
                >
                  <Pdf
                    source={{ uri: bookList[0].uri }}
                    page={0}
                    horizontal={true}
                    enablePaging={true}
                    trustAllCerts={false}
                    fitWidth={true}
                    fitPolicy={2}
                    //scale={1}
                    enableRTL={true}
                    singlePage={true}
                    onLoadComplete={(numberOfPages, filePath) => {
                      //console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onError={(error) => {
                      console.log(error);
                    }}
                    style={styles.pdf}
                  />
                </Pressable>
                <View style={styles.currentPdfInfoContainer}>
                  <Text style={styles.currentPdfName}>{bookList[0].name}</Text>
                  <Text style={styles.currentPdfInfoSettings}>...</Text>
                </View>
              </View>
            </>
          ) : null}
          {bookList[1] !== undefined ? (
            <View style={styles.lastReadContainer}>
              <View style={styles.lastReadUpperTextContainer}>
                <Text style={styles.lastReadBrowseIcon}>
                  {String.fromCharCode(0x2630)}
                </Text>
                <Text style={styles.lastReadText}>see All</Text>
                <Text style={styles.bookListLengthText}>{bookList.length}</Text>
                <Text style={{ color: "grey", left: 215, fontWeight: "bold" }}>
                  {">"}
                </Text>
              </View>
              <FlatList
                data={bookList}
                horizontal={true}
                renderItem={readLastItemView}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.contentContainer}
              />
            </View>
          ) : null}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lastReadInfoSettings: {
    marginLeft: 0,
    position: "absolute",
    bottom: 0,
    left: -3,
    paddingBottom: 10,
    paddingHorizontal: 25,
    color: "grey",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 123,
    borderColor: "red",
    borderWidth: 0,
  },
  lastItemPdf: {
    flex: 1,
    backgroundColor: "rgb(44, 44, 44)",
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: "stretch",
    position: "relative",
  },
  lastItemPdfView: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0,
    width: 163,
    height: 220,
  },
  lastItemPdfDisplay: {
    backgroundColor: "black",
    color: "white",
    marginLeft: 0,
    borderColor: "green",
    borderWidth: 0,
    borderRadius: 5,
    width: 160,
    height: 220,
  },
  contentContainer: {
    paddingHorizontal: 25,
  },
  lastReadUpperTextContainer: {
    marginHorizontal: 0,
    backgroundColor: "rgb(44, 44, 44)",
    backgroundColor: "black",
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0,
    height: 45,
    bottom: 5,
    padding: 0,
    width: "100%",
    borderColor: "rgb(112, 112, 112)",
    borderColor: "rgb(44, 44, 44)",
    borderRadius: 0,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    alignItems: "center",
  },
  lastReadSeeAllText: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
    marginLeft: 25,
    bottom: 20,
    fontStyle: "italic",
  },
  lastReadContainer: {
    marginTop: 20,
    backgroundColor: "rgb(44, 44, 44)",
    backgroundColor: "black",
    flexDirection: "column",
    borderWidth: 0,
    borderColor: "red",
    borderColor: "rgb(44, 44, 44)",
    borderBottomWidth: 1,
    height: 300,
    bottom: 10,
  },
  lastReadBrowseIcon: {
    marginLeft: 25,
    color: "rgb(209, 209, 209)",
    right: 0,
    marginTop: 0,
    fontSize: 22,
    fontWeight: "normal",
    fontStyle: "normal",
    position: "relative",
  },
  lastReadText: {
    marginLeft: 25,
    color: "white",
    right: 0,
    left: -18,
    marginTop: 0,
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "normal",
  },
  bookListLengthText: {
    left: 210,
    color: "white",
    marginLeft: 25,
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  currentPdfInfoContainer: {
    marginTop: 20,
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    borderColor: "white",
    marginRight: 28,
    borderWidth: 0,
    height: 200,
  },
  currentPdfView: {
    flexDirection: "row",
    borderColor: "red",
    borderWidth: 0,
    height: 272,
    bottom: 10,
  },
  pdf: {
    flex: 1,
    backgroundColor: "black",
    borderColor: "red",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: "stretch",
    position: "relative",
  },
  storage: {
    color: "white",
    fontSize: 15,
    marginLeft: 25,
    marginRight: 25,
    fontWeight: "bold",
  },
  currentPdfName: {
    padding: 0,
    marginLeft: 20,
    paddingRight: 0,
    bottom: 20,
    color: "white",
    fontSize: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  currentPdfInfoSettings: {
    marginLeft: 0,
    top: 10,
    padding: 10,
    paddingHorizontal: 15,
    color: "grey",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 123,
    borderColor: "red",
    borderWidth: 0,
  },
  currentPdfDisplay: {
    marginLeft: 25,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    width: "45%",
    height: 270,
  },
  homeText: {
    color: "white",
    fontSize: 40,
    paddingTop: 10,
    marginLeft: 25,
    marginRight: 25,
    fontWeight: "bold",
    borderColor: "rgb(112, 112, 112)",
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  currentPdfText: {
    color: "white",
    padding: 10,
    marginLeft: 15,
    marginTop: 0,
    fontSize: 22,
    fontStyle: "italic",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default HomeScreen;
