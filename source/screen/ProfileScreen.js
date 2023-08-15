import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.homeText}>Profile</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  homeText: {
    color: "white",
    fontSize: 30,
    paddingTop: 10,
    marginLeft: 25,
    marginRight: 25,
    fontWeight: "bold",
    borderColor: "rgb(112, 112, 112)",
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ProfileScreen;
