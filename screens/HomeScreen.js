import { View, ScrollView, StyleSheet } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Appscreen/HorizontalCard";
import SearchComponent from "../components/Appscreen/Search";
import { useEffect, useState } from "react";
import {
  getAiringToday,
  getPopularMovie,
  getUpcomingMovie,
} from "../Api/ApiCall";

function HomeScreen() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard
            children="New show"
            onPress={handlePress}
            data1={getUpcomingMovie}
          />
        </View>
        <View style={styles.vcard}>
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
        </View>
        <View style={styles.hcard}>
          <HorizontalCard
            children="New TV show"
            onPress={handlePress}
            data1={getAiringToday}
          />
        </View>
        <View style={styles.vcard}>
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  hcard: {
    marginBottom: 10,
  },
  vcard: {
    marginHorizontal: 10,
  },
});
