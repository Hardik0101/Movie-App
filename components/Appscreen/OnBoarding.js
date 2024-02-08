import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import IconButton from "./IconButton";
import { Colors } from "../../constants/styles";

const OnBoarding = ({
  image,
  text,
  onNext,
  onPrevious,
  disabled,
  currentStep,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          icon="chevron-back-outline"
          color="white"
          size={24}
          onPress={onPrevious}
          disabled={currentStep === 0}
        />
        <IconButton
          icon="chevron-forward-outline"
          color="white"
          size={24}
          onPress={onNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: Colors.primary800,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ObScreen;
