import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Appscreen/HorizontalCard";

function MovieScreen({ navigation }) {
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard children="New Movies" />
        </View>
        <View style={styles.vcard}>
          <MovieScreenCard onPress={handlePress} children="New Movies" />
          <MovieScreenCard onPress={handlePress} children="Old Movies" />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  hcard: {
    marginBottom: 10,
  },
  vcard: {
    marginHorizontal: 10,
  },
});

export default MovieScreen;
