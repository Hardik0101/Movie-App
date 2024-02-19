import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SearchComponent from "./Search";
import { Colors } from "../../constant/style";
import Button from "../UI/Button";
import { Ionicons } from "@expo/vector-icons";
import { movies, tvshow, home } from "../../filterData.json";

import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  fetchActionMovies,
  fetchComedyMovies,
  fetchRomanticMovies,
  fetchThrillerMovies,
} from "../../store/redux/filterMoviesSlice";
import { useNavigation } from "@react-navigation/native";
import {
  fetchAnimationShow,
  fetchComedyShow,
  fetchCrimeShow,
  fetchDramaShow,
} from "../../store/redux/filterTvShowSlice";
import { fetchMovieDetailsList } from "../../store/redux/movieSlice";
import { fetchTvShowDetailsList } from "../../store/redux/tvSlice";

function SearchAndFilter({ type }) {
  const navigation = useNavigation();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilterData, setSelectedFilterData] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchActionMovies());
    dispatch(fetchRomanticMovies());
    dispatch(fetchThrillerMovies());
    dispatch(fetchComedyMovies());
    dispatch(fetchAnimationShow());
    dispatch(fetchComedyShow());
    dispatch(fetchDramaShow());
    dispatch(fetchCrimeShow());
    dispatch(fetchMovieDetailsList());
    dispatch(fetchTvShowDetailsList());

    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  const filterHandler = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterSelection = async (filter) => {
    let filterData = null;
    switch (filter) {
      case "Action":
        filterData = data.filter.actionMovies;
        break;
      case "Comedy":
        filterData = data.filter.comedyMovies;
        break;
      case "Romantic":
        filterData = data.filter.romanticMovies;
        break;
      case "Thriller":
        filterData = data.filter.thrillerMovies;
        break;
      case "Animation":
        filterData = data.filterTv.animationShow;
        break;
      case "ComedyShow":
        filterData = data.filterTv.comedyShow;
        break;
      case "Crime":
        filterData = data.filterTv.crimeShow;
        break;
      case "Drama":
        filterData = data.filterTv.dramaShow;
        break;
      case "Movies":
        filterData = data.movies.moviesDetailsList;
        break;
      case "TvShow":
        filterData = data.tvShow.tvShowDetailsList;
        break;
      default:
        break;
    }

    setSelectedFilterData(filterData);
    setShowFilters(false);
  };

  const handleClose = () => {
    setSelectedFilterData(null);
  };

  const handlePress = (item) => {
    navigation.navigate("MoviesDetails", { id: item.id });
  };

  return (
    <View style={styles.container}>
      <SearchComponent type={type} />
      <Button onPress={filterHandler}>
        <Ionicons name="funnel-outline" size={26} />
      </Button>
      {showFilters && (
        <View style={styles.filterContainer}>
          {type === "movie"
            ? movies.map((filter) => (
                <TouchableOpacity
                  key={filter.name}
                  style={styles.filterOption}
                  onPress={() => handleFilterSelection(filter.name)}
                >
                  <Text>{filter.name}</Text>
                </TouchableOpacity>
              ))
            : type === "home"
            ? home.map((filter) => (
                <TouchableOpacity
                  key={filter.name}
                  style={styles.filterOption}
                  onPress={() => handleFilterSelection(filter.name)}
                >
                  <Text>{filter.name}</Text>
                </TouchableOpacity>
              ))
            : tvshow.map((filter) => (
                <TouchableOpacity
                  key={filter.name}
                  style={styles.filterOption}
                  onPress={() => handleFilterSelection(filter.name)}
                >
                  <Text>{filter.name}</Text>
                </TouchableOpacity>
              ))}
        </View>
      )}
      {selectedFilterData && (
        <View style={styles.selectedDataContainer}>
          <Button onPress={handleClose}>
            <Ionicons name="close-outline" size={24} color={Colors.primary} />
          </Button>
          <ScrollView
            style={styles.selectedData}
            showsVerticalScrollIndicator={false}
          >
            {selectedFilterData.map((item, index) => (
              <SafeAreaView style={styles.dataItem} key={index}>
                <View style={styles.titleConatiner}>
                  <Text style={styles.movieTitle}>
                    {item.title || item.name}
                  </Text>
                </View>
                <Image
                  source={{
                    uri: (item.poster_path = `https://image.tmdb.org/t/p/w300/${item.poster_path}`),
                  }}
                  style={styles.movieImage}
                />
              </SafeAreaView>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  filterContainer: {
    position: "absolute",
    top: "100%",
    right: 10,
    backgroundColor: Colors.primary200,
    padding: 10,
    borderRadius: 5,
    width: 150,
    zIndex: 999,
  },
  filterOption: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary600,
  },
  dataItem: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    overflow: "hidden",
  },
  movieImage: {
    width: 70,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  movieTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  titleConatiner: {
    width: "60%",
  },
  selectedDataContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    height: 640,
  },
  selectedData: {
    backgroundColor: Colors.primary100,
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginTop: 6,
  },
});

export default SearchAndFilter;
