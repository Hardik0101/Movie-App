import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../../constant/style";

const MovieScreenCard = ({ onPress, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.innerContainer} onPress={onPress}>
          <Image
            source={require("../../assets/image/step1.png")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/image/step1.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.primary50,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 8,
  },
  innerContainer: {
    flexDirection: "row",
  },
});

export default MovieScreenCard;
