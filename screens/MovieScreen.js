import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Appscreen/HorizontalCard";
import SearchComponent from "../components/Appscreen/Search";
import { getPopularMovie, getPopularTvData } from "../Api/ApiCall";

function MovieScreen({ navigation }) {
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard
            children="New Movies"
            onPress={handlePress}
            data1={getPopularMovie}
          />
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
