import { View, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import {
  getAiringTodayTvShow,
  getComedyMovies,
  getRomanticMovies,
  getThrillerMovies,
  getUpcomingMovie,
} from "../Api/ApiCall";
import VerticalCard from "../components/Cards/VerticalCard";
import SearchAndFiter from "../components/Cards/SearchandFilter";

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
      <SearchAndFiter type={"home"} />
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
            children="Romantic Movies"
            onPress={handlePress}
            functions={getRomanticMovies}
          />
          <VerticalCard
            children="Comedy Movies"
            onPress={handlePress}
            functions={getComedyMovies}
          />
          <VerticalCard
            children="Thriller Movies"
            onPress={handlePress}
            functions={getThrillerMovies}
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
