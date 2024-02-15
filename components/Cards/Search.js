import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constant/style";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function SearchComponent({ type }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigation();

  async function fetchSearchResults() {
    if (!searchText) {
      setSearchResults([]);
      return;
    }
    try {
      setIsSearching(true);
      let apiUrl = "";
      if (type === "movie") {
        apiUrl = "https://api.themoviedb.org/3/search/movie";
      } else if (type === "tv") {
        apiUrl = "https://api.themoviedb.org/3/search/tv";
      } else if (type === "home") {
        apiUrl = "https://api.themoviedb.org/3/search/multi";
      }
      const response = await axios.get(apiUrl, {
        params: {
          api_key: "df4e888c43bec24422bfa0f9a44e5747",
          query: searchText,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results: ", error);
    } finally {
      setIsSearching(false);
    }
  }

  const handlePress = (id, type) => {
    if (type === "movie") {
      navigation.navigate("MoviesDetails", { id });
    } else if (type === "tv") {
      navigation.navigate("TvShowDetails", { id });
    } else if (type === "home") {
      navigation.navigate("MoviesDetails" || "TvShowDetails", { id });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handlePress(item.id, type)}
      style={styles.searchData}
    >
      <Text style={styles.title}>{item.title || item.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri:
            item.poster_path !== null
              ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
              : "https://media.comicbook.com/files/img/default-movie.png",
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={fetchSearchResults}
          onTextInput={fetchSearchResults}
        />
        <Ionicons
          name="search"
          color={Colors.primary200}
          size={20}
          style={{ marginRight: 4 }}
        />
      </View>
      {searchText.length > 0 && (
        <View style={styles.searchListContainer}>
          {isSearching && <Text style={styles.loadingText}>Loading...</Text>}
          {!isSearching && searchResults.length === 0 && (
            <Text style={styles.notItemText}>No items found</Text>
          )}
          {!isSearching && searchResults.length > 0 && (
            <FlatList
              style={styles.searchList}
              data={searchResults}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: Colors.primary700,
  },
  searchListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: Colors.primary500,
    borderRadius: 16,
    padding: 6,
    marginTop: 70,
    marginHorizontal: 10,
    height: 500,
  },
  searchList: {
    flex: 1,
  },
  searchData: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary50,
    padding: 10,
    borderRadius: 10,
    margin: 6,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary800,
    width: "60%",
  },
  image: {
    width: 70,
    height: 100,
    borderRadius: 10,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  notItemText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default SearchComponent;
