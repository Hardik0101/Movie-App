import axios from "axios";
import { useEffect, useState } from "react";
import { getMoviesDetails } from "./ApiCall";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export function MoviesDetails({ title, overview }) {
  const [movieDetails, setMovieDetails] = useState("");
  const route = useRoute();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      const allMoviesDetails = await getMoviesDetails(
        route.params.id,
        route.params.type
      );
      setMovieDetails(allMoviesDetails);
    };

    fetchMoviesDetails();
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`,
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{movieDetails.title}</Text>
          <Text style={styles.overview}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
  },
  image: {
    width: 340,
    height: 500,
    borderRadius: 10,
  },
});
