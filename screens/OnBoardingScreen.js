import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OnBoarding from "../components/Appscreen/OnBoarding";

const OnBoardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [disable, setDisable] = useState(false);
  const navigation = useNavigation();

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep === 1) {
      navigation.navigate("Home");
    } else if (currentStep === 2) {
      navigation.navigate("Home");
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    if (currentStep === 0) {
      setDisable(true);
    }
  };

  // Define your onboarding step
  const onboardingSteps = [
    {
      image: require("../assets/image/step1.png"),
      text: 'Welcome to our app! Get started by clicking "Next".',
    },
    {
      image: require("../assets/image/step2.jpeg"),
      text: "Explore our amazing features!",
    },
    {
      image: require("../assets/image/step3.png"),
      text: 'Ready to go! Click "Finish" to start using the app.',
    },
  ];

  return (
    <View style={styles.container}>
      <OnBoarding
        image={onboardingSteps[currentStep].image}
        text={onboardingSteps[currentStep].text}
        onNext={handleNext}
        onPrevious={handlePrevious}
        disabled={disable}
        currentStep={currentStep}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardingScreen;
