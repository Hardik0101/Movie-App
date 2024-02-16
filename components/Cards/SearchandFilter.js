import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import SearchComponent from "./Search";
import { Colors } from "../../constant/style";
import Button from "../UI/Button";
import { Ionicons } from "@expo/vector-icons";
import { movies, tvshow } from "../../filterData.json";

function SearchAndFilter({ type }) {
  const [showFilters, setShowFilters] = useState(false);

  const filterHandler = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterSelection = (filter) => {
    console.log("Selected filter:", filter);
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
});

export default SearchAndFilter;
