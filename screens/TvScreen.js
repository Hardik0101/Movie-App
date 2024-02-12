import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Appscreen/HorizontalCard";
import SearchComponent from "../components/Appscreen/Search";

function TvScreen({ navigation }) {
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <MovieScreenCard onPress={handlePress} children="New Tv Show" />
          <MovieScreenCard onPress={handlePress} children="Old Tv Show" />
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

export default TvScreen;
