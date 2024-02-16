import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

const API_KEY = "df4e888c43bec24422bfa0f9a44e5747";
const API_URL = "https://api.themoviedb.org/3";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchActionMovies();
  }, []);

  const fetchActionMovies = async () => {
    try {
      const response = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
          with_genres: 28,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching action movies:", error);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image
        style={styles.moviePoster}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      />
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  movieContainer: {
    margin: 10,
  },
  moviePoster: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
});

export default App;
