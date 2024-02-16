import React, { useEffect, useState } from "react";
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
import { clearState, fetchMovieDetails } from "../store/redux/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../constant/style";

export function MoviesDetails() {
  const route = useRoute();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const data = useSelector((state) => state);

  useEffect(() => {
    function fetchMovieData() {
      try {
        dispatch(fetchMovieDetails(route.params.id));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchMovieData();

    return () => {
      dispatch(clearState());
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w300/${data?.movies?.movieDetails?.backdrop_path}`,
        }}
        resizeMode="cover"
      />
      <Text style={styles.title}>{data?.movies?.movieDetails?.title}</Text>
      <View style={styles.statusRatingContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.statusBadge}>
            {data?.movies?.movieDetails?.status}
          </Text>
        </View>
        <View style={styles.outerdetailItemConatiner}>
          <View style={styles.detailItem}>
            <FontAwesomeIcon icon={faStar} style={styles.icon} />
            <Text style={styles.ratingText}>
              Rating: {data?.movies?.movieDetails?.vote_average.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.outerdetailItemConatiner}>
        <View style={styles.detailItem}>
          <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
          <Text style={styles.releaseText}>
            Release Date: {data?.movies?.movieDetails?.release_date}
          </Text>
        </View>
      </View>
      <View style={styles.overviewConatiner}>
        <Text style={styles.overview}>
          {data?.movies?.movieDetails?.overview}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: Colors.primary800,
    borderBottomWidth: 2,
    letterSpacing: 1,
  },
  overview: {
    fontSize: 16,
    textAlign: "justify",
    color: Colors.primary800,
    letterSpacing: 1,
    lineHeight: 25,
    fontWeight: "300",
  },
  overviewConatiner: {
    marginTop: 10,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: Colors.primary300,
  },
  ratingText: {
    color: Colors.primary800,
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
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
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  outerdetailItemConatiner: {
    backgroundColor: Colors.primary200,
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 5,
  },

  releaseText: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.primary800,
    textAlign: "justify",
  },
  icon: {
    fontSize: 16,
    color: Colors.primary500,
    marginRight: 6,
  },
  statusBadge: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: Colors.primary200,
    color: Colors.primary800,
    textAlign: "center",
  },
  statusRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
