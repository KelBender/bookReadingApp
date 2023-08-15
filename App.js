import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

import HomeScreen from "./source/screen/HomeScreen";
import LibraryScreen from "./source/screen/LibraryScreen";
import StatsScreen from "./source/screen/StatsScreen";
import ProfileScreen from "./source/screen/ProfileScreen";

import { BookListProvider } from "./source/contexts/BookListContext";


export default function App() {
  const [currentPage, setCurrentPage] = useState("Library");

  const handleItemPress = (item) => {
    setCurrentPage(item);
  };
  // <Text style={styles.bottomNavItemText}>Home</Text>
  return (
    <View style={styles.container}>
      <StatusBar style="auto"></StatusBar>
      <BookListProvider>
        <View style={styles.modalContainer}>
          {/* Content of the Modal */}
          {currentPage === "Home" && <HomeScreen />}
          {currentPage === "Library" && <LibraryScreen />}
          {currentPage === "Stats" && <StatsScreen />}
          {currentPage === "Profile" && <ProfileScreen />}
        </View>
      </BookListProvider>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => handleItemPress("Home")}
        >
          <Image
            source={require("./source/constants/images/White_Home_Icon_Transparent.png")}
            style={styles.bottemNavImage}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => handleItemPress("Library")}
        >
          <Image
            source={require("./source/constants/images/White_Library_Icon_Transparent.png")}
            style={{ width: 50, height: 50 }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => handleItemPress("Stats")}
        >
          <Image
            source={require("./source/constants/images/White_Statistics_Icon_Transparent.png")}
            style={{ width: 35, height: 35 }}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => handleItemPress("Profile")}
        >
          <Image
            source={require("./source/constants/images/White_Profile_Icon_Transparent.png")}
            style={{ width: 35, height: 35 }}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  bottomNavContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 65,
    backgroundColor: "rgb(18, 19, 18)",
    borderColor: "rgb(23, 23, 23)",
    borderTopWidth: 2,
  },
  bottomNavItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomNavItemText: {
    textTransform: "uppercase",
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  bottemNavImage: {
    width: 45,
    height: 45,
  },
});
