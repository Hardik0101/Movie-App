import { useEffect, useState } from "react";
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
import { clearState, fetchTvShowDetails } from "../store/redux/tvSlice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "../constant/style";

export function TvShowDetails() {
  const route = useRoute();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const data = useSelector((state) => state);

  useEffect(() => {
    function fetchTvShowData() {
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
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w300/${data?.tvShow?.tvShowDetails?.backdrop_path}`,
          }}
        />
        <Text style={styles.showName}>{data?.tvShow?.tvShowDetails?.name}</Text>
        <View style={styles.countContainer}>
          <View style={styles.itemContainer}>
            <Text>{data?.tvShow?.tvShowDetails?.status}</Text>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.detailItem}>
              <FontAwesomeIcon icon={faStar} style={styles.icon} />
              <Text style={styles.ratingText}>
                Rating:{data?.tvShow?.tvShowDetails?.vote_average.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.detailItem}>
            <FontAwesomeIcon icon={faCalendarAlt} style={styles.icon} />
            <Text style={styles.releaseText}>
              Release Date: {data?.tvShow?.tvShowDetails?.first_air_date}
            </Text>
          </View>
        </View>
        <View style={styles.countContainer}>
          <View style={styles.itemContainer}>
            <Text>
              Episodes: {data?.tvShow?.tvShowDetails?.number_of_episodes}
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text>
              Seasons: {data?.tvShow?.tvShowDetails?.number_of_seasons}
            </Text>
          </View>
        </View>
        <View style={styles.overviewContainer}>
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
    flexGrow: 1,
    paddingBottom: 20,
    margin: 10,
  },
  showName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth: 2,
    marginHorizontal: 20,
  },
  overview: {
    fontSize: 16,
    textAlign: "justify",
    color: Colors.primary800,
    letterSpacing: 1,
    lineHeight: 25,
    fontWeight: "300",
  },
  overviewContainer: {
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: Colors.primary300,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    padding: 10,
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
  icon: {
    fontSize: 16,
    color: Colors.primary500,
    marginRight: 6,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: Colors.primary200,
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 5,
    marginBottom: 10,
  },
  statusBadge: {
    fontSize: 16,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: Colors.primary200,
    color: Colors.primary800,
    textAlign: "center",
  },
  countContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
