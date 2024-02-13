import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import SearchComponent from "../components/Cards/Search";
import VerticalCard from "../components/Cards/VerticalCard";
import { getPopularTvShow } from "../Api/ApiCall";

function TvScreen({ navigation }) {
  function handlePress(id, type) {
    navigation.navigate("TvDetails", { id, type });
  }

  return (
    <>
      <SearchComponent />
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

export default TvScreen;
