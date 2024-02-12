import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Colors } from "../constant/style";
import Button from "../components/UI/Button";

const { width } = Dimensions.get("window");

function OnboardingScreen1({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const page = Math.round(contentOffset.x / width);
    setCurrentPage(page);
  };

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    navigation.navigate("Signup");
  };
  const pages = [
    {
      image: require("../assets/image/step1.png"),
      title: "Welcome to Movie Mania!",
      description: "Explore the world of cinema like never before.",
    },
    {
      image: require("../assets/image/step2.jpeg"),
      title: "Discover Your Favorites",
      description: "Find the movies you love effortlessly.",
    },
    {
      image: require("../assets/image/step3.png"),

      title: "Personalized Recommendations",
      description: "Let us tailor your movie experience.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {pages.map((page, index) => (
          <View key={index} style={styles.pageContainer}>
            <Image style={styles.image} source={page.image} />
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>{page.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.button}>
        {currentPage === pages.length - 1 && (
          <>
            <View style={styles.buttons}>
              <Button onPress={handleLogin}>Login</Button>
              <Button onPress={handleSignUp}>Signup</Button>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: Colors.primary700,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.primary600,
  },
  image: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 50,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
  },
});

export default OnboardingScreen1;
