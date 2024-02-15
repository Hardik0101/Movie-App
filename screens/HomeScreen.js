import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import SearchComponent from "../components/Cards/Search";
import { getAiringTodayTvShow, getUpcomingMovie } from "../Api/ApiCall";
import VerticalCard from "../components/Cards/VerticalCard";

function HomeScreen() {
  const navigation = useNavigation();
  function handlePress(id) {
    navigation.navigate("MoviesDetails", { id });
  }
  function handlePressTv(id) {
    navigation.navigate("TvShowDetails", { id });
  }

  return (
    <>
      <SearchComponent type={"home"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.horizontalCardView}>
          <HorizontalCard
            children="New Movies"
            onPress={handlePress}
            functions={getUpcomingMovie}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard
            children="New"
            onPress={handlePress}
            functions={getUpcomingMovie}
          />
          <VerticalCard
            children="New"
            onPress={handlePress}
            functions={getUpcomingMovie}
          />
          <VerticalCard
            children="New"
            onPress={handlePress}
            functions={getUpcomingMovie}
          />
        </View>
        <View style={styles.horizontalCardView}>
          <HorizontalCard
            children="New TV show"
            onPress={handlePressTv}
            functions={getAiringTodayTvShow}
          />
        </View>
        <View style={styles.verticalCardView}>
          <VerticalCard
            children="New"
            onPress={handlePressTv}
            functions={getAiringTodayTvShow}
          />
          <VerticalCard
            children="New"
            onPress={handlePressTv}
            functions={getAiringTodayTvShow}
          />
          <VerticalCard
            children="New"
            onPress={handlePressTv}
            functions={getAiringTodayTvShow}
          />
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
