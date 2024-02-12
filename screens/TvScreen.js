// import { Text, View } from "react-native";

// function TvScreen() {
//   return (
//     <View>
//       <Text>Tv Screen</Text>
//     </View>
//   );
// }

// export default TvScreen;

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";

const TvScreen = () => {
  function handlePress() {
    const navigation = useNavigation();
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default TvScreen;
