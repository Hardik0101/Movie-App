import axios from "axios";
import { useEffect, useState } from "react";
import { getDetails, getDetailsTV, getTvShowDetails } from "./ApiCall";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export function TvShowDetails({ title, overview }) {
  const [tvDetails, setTvDetails] = useState("");
  const route = useRoute();

  useEffect(() => {
    const fetchTvShowDetails = async () => {
      const allTvShowDetails = await getTvShowDetails(
        route.params.id,
        route.params.type
      );
      setTvDetails(allTvShowDetails);
    };

    fetchTvShowDetails();
  }, []);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w300/${tvDetails.poster_path}`,
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{tvDetails.name}</Text>
          <Text style={styles.overview}>{tvDetails.overview}</Text>
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
