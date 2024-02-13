import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Appscreen/HorizontalCard";
import SearchComponent from "../components/Appscreen/Search";
import { getPopularTvData } from "../Api/ApiCall";

function TvScreen({ navigation }) {
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard
            children="New TV Show"
            onPress={handlePress}
            data1={getPopularTvData}
          />
        </View>
        <View style={styles.vcard}>
          <MovieScreenCard
            onPress={handlePress}
            children="New Tv Show"
            data1={getPopularTvData}
          />
          <MovieScreenCard
            onPress={handlePress}
            children="New Tv Show"
            data1={getPopularTvData}
          />
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

export default TvScreen;
