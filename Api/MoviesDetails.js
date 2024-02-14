import axios from "axios";
import { useEffect, useState } from "react";
import { getMoviesDetails } from "./ApiCall";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../store/redux/movieSlice";

export function MoviesDetails({ title, overview }) {
  // const [movieDetails, setMovieDetails] = useState("");
  const route = useRoute();
  // console.log(route);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchMoviesDetails = async () => {
  //     const allMoviesDetails = await getMoviesDetails(
  //       route.params.id,
  //       route.params.type
  //     );
  //     setMovieDetails(allMoviesDetails);
  //   };

  //   fetchMoviesDetails();
  // }, []);
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchMovieDetails(route.params.id));
  }, [dispatch]);
  console.log(data);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${data?.movies?.moviesDetails?.poster_path}`,
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{data?.movies?.moviesDetails?.title}</Text>
          <Text style={styles.overview}>
            {data?.movies?.moviesDetails?.overview}
          </Text>
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
