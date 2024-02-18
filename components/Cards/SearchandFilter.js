import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import SearchComponent from "./Search";
import { Colors } from "../../constant/style";
import Button from "../UI/Button";
import { Ionicons } from "@expo/vector-icons";
import { movies, tvshow } from "../../filterData.json";

import { useDispatch, useSelector } from "react-redux";
import {
  clearState,
  fetchActionMovies,
  fetchComedyMovies,
  fetchRomanticMovies,
  fetchThrillerMovies,
} from "../../store/redux/filterSlice";

function SearchAndFilter({ type }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchActionMovies());
    dispatch(fetchRomanticMovies());
    dispatch(fetchThrillerMovies());
    dispatch(fetchComedyMovies());

    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  const [showFilters, setShowFilters] = useState(false);

  const filterHandler = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterSelection = async (filter) => {
    switch (filter) {
      case "Action":
        console.log("Action data:", data.filter.actionMovies);
        break;
      case "Comedy":
        console.log(data.filter.comedyMovies);
        break;
      case "Romantic":
        console.log(data.filter.romanticMovies);
        break;
      case "Thriller":
        console.log(data.filter.thrillerMovies);
        break;
      case "DayShow":
        break;
      case "NightShow":
        break;
      default:
    }

    setShowFilters(false);
  };

  return (
    <View style={styles.container}>
      <SearchComponent type={type} />
      <Button onPress={filterHandler}>
        <Ionicons name="funnel-outline" size={26} />
      </Button>
      {(showFilters && type === "movie" && (
        <View style={styles.filterContainer}>
          {movies.map((filter) => (
            <TouchableOpacity
              style={styles.filterOption}
              onPress={() => handleFilterSelection(filter.name)}
            >
              <Text>{filter.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )) ||
        (showFilters && type === "tv" && (
          <View style={styles.filterContainer}>
            {tvshow.map((filter) => (
              <TouchableOpacity
                style={styles.filterOption}
                onPress={() => handleFilterSelection(filter.name)}
              >
                <Text>{filter.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
  movieItem: {
    marginRight: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
    borderRadius: 5,
  },
  movieTitle: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  actionMoviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 70,
    position: "absolute",
    zIndex: 999,
    backgroundColor: Colors.primary700,
  },
  moviesList: {
    flex: 1,
    position: "absolute",
    zIndex: 999,
    backgroundColor: Colors.primary100,
  },
});

export default SearchAndFilter;
