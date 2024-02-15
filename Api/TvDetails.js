import axios from "axios";
import { useEffect, useState } from "react";
import { getDetails, getDetailsTV, getTvShowDetails } from "./ApiCall";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTvShowDetails } from "../store/redux/tvSlice";

export function TvShowDetails() {
  const route = useRoute();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const data = useSelector((state) => state);

  useEffect(() => {
    async function fetchTvShowData() {
      try {
        dispatch(fetchTvShowDetails(route.params.id));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchTvShowData();
    return () => {
      clearTimeout(dispatch);
    };
  }, [dispatch, route.params.id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error occurred while loading data.</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri:
                data.tvShow.tvShowDetails.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w300/${data?.tvShow?.tvShowDetails?.poster_path}`
                  : "https://media.comicbook.com/files/img/default-movie.png",
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{data?.tvShow?.tvShowDetails?.name}</Text>
          <Text style={styles.overview}>
            {data?.tvShow?.tvShowDetails?.overview}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
