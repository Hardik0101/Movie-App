import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import VerticalCard from "../components/Cards/VerticalCard";
import { getPopularTvShow } from "../Api/ApiCall";
import SearchAndFiter from "../components/Cards/SearchandFilter";

function TvShowScreen({ navigation }) {
  function handlePress(id, type) {
    navigation.navigate("TvShowDetails", { id, type });
  }

  return (
    <>
      <SearchAndFiter type={"tv"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard
            children="New TV Show"
            onPress={handlePress}
            functions={getPopularTvShow}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard
            onPress={handlePress}
            children="New Tv Show"
            functions={getPopularTvShow}
          />
          <VerticalCard
            onPress={handlePress}
            children="New Tv Show"
            functions={getPopularTvShow}
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

export default TvShowScreen;
