import axios from "axios";
import { useEffect, useState } from "react";
import { getDetails, getDetailsTV } from "./ApiCall";
import { Text, View, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

export function TvDetails({ title, overview }) {
  const [details, setDetails] = useState("");
  const route = useRoute();

  useEffect(() => {
    const fetchDetails = async () => {
      const allDetails = await getDetailsTV(route.params.id, route.params.type);
      setDetails(allDetails);
    };

    fetchDetails();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w300/${details.poster_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{details.title}</Text>
        <Text style={styles.overview}>{details.overview}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
  },
  image: {
    width: 340,
    height: 500,
    borderRadius: 10,
  },
});
