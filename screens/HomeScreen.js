import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import SearchComponent from "../components/Cards/Search";
import { getAiringTodayTvShow, getUpcomingMovie } from "../Api/ApiCall";
import VerticalCard from "../components/Cards/VerticalCard";

function HomeScreen() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Details");
  }

  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.horizontalCardView}>
          <HorizontalCard
            children="New show"
            onPress={handlePress}
            functions={getUpcomingMovie}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard children="New" onPress={handlePress} />
          <VerticalCard children="New" onPress={handlePress} />
          <VerticalCard children="New" onPress={handlePress} />
        </View>
        <View style={styles.horizontalCardView}>
          <HorizontalCard
            children="New TV show"
            onPress={handlePress}
            functions={getAiringTodayTvShow}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard children="New" onPress={handlePress} />
          <VerticalCard children="New" onPress={handlePress} />
          <VerticalCard children="New" onPress={handlePress} />
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  horizontalCardView: {
    marginBottom: 10,
  },
  verticalCardView: {
    marginHorizontal: 10,
  },
});
