import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HorizontalCard from "../components/Cards/HorizontalCard";
import SearchComponent from "../components/Cards/Search";
import {
  getActionMovies,
  getComedyMovies,
  getPopularMovie,
  getRomanticMovies,
  getThrillerMovies,
} from "../Api/ApiCall";
import VerticalCard from "../components/Cards/VerticalCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetailsList } from "../store/redux/movieSlice";
import IconButton from "../components/UI/IconButton";
import SearchAndFiter from "../components/Cards/SearchandFilter";

function MovieScreen({ navigation }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchMovieDetailsList());
  }, []);
  // console.log(data.movies.moviesDetailsList);

  function handlePress(id) {
    navigation.navigate("MoviesDetails", { id });
  }

  function filterHandler() {
    console.log("filter");
  }
  return (
    <>
      <SearchAndFiter type={"movie"} />

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
            functions={getComedyMovies}
          />
          <VerticalCard
            onPress={handlePress}
            children="Romantic Movies"
            functions={getRomanticMovies}
          />
          <VerticalCard
            onPress={handlePress}
            children="Thriller Movies"
            functions={getThrillerMovies}
          />
          <VerticalCard
            onPress={handlePress}
            children="Action Movies"
            functions={getActionMovies}
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
