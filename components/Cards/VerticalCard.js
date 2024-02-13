import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constant/style";

function VerticalCard({ children, onPress, functions }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await functions();
      setData(popularData);
    };

    fetchData();
  }, []);
  return (
    <>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          style={styles.scroll}
          decelerationRate={"fast"}
        >
          {data.map((data, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPress(data.id, data.type)}
            >
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w300/${data.poster_path}`,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    padding: 8,
    backgroundColor: Colors.primary200,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    height: 166,
  },
  scroll: {
    width: "100%",
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 6,
    marginRight: 8,
  },
});

export default VerticalCard;
