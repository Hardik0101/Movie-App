import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import SearchComponent from "../components/Cards/Search";
import { getPopularMovie } from "../Api/ApiCall";
import VerticalCard from "../components/Cards/VerticalCard";

function MovieScreen({ navigation }) {
  function handlePress(id) {
    navigation.navigate("MoviesDetails", { id });
  }

  return (
    <>
      <SearchComponent type={"movie"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.horizontalCardView}>
          <HorizontalCard
            children="New Movies"
            onPress={handlePress}
            functions={getPopularMovie}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard
            onPress={handlePress}
            children="Comedy Movies"
            functions={getPopularMovie}
          />
          <VerticalCard
            onPress={handlePress}
            children="Romantic Movies"
            functions={getPopularMovie}
          />
          <VerticalCard
            onPress={handlePress}
            children="Thriller Movies"
            functions={getPopularMovie}
          />
          <VerticalCard
            onPress={handlePress}
            children="Action Movies"
            functions={getPopularMovie}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  horizontalCardView: {
    marginBottom: 10,
  },
  verticalCardView: {
    marginHorizontal: 10,
  },
});

export default MovieScreen;
