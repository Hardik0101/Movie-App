import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";

function MovieScreen({ navigation }) {
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <MovieScreenCard onPress={handlePress} children="New Movies" />
          <MovieScreenCard onPress={handlePress} children="Old Movies" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MovieScreen;
