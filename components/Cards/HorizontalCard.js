import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../constant/style";
import { useEffect, useState } from "react";

const SCREEN_WIDTH = Dimensions.get("window").width;

function HorizontalCard({ children, onPress, functions }) {
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
          snapToAlignment="center"
          snapToInterval={SCREEN_WIDTH}
          decelerationRate={"fast"}
        >
          {data.map((data, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={styles.imageContent}
              onPress={() => onPress(data.id, data.type)}
            >
              <Image
                style={styles.image}
                source={{
                  uri: `https://image.tmdb.org/t/p/w300/${data.poster_path}`,
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default HorizontalCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary600,
    textAlign: "center",
  },
  container: {
    height: 500,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
    overflow: "hidden",
  },
  scroll: {
    width: "100%",
  },
  imageContent: {
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    padding: 2,
    borderRadius: 10,
    width: SCREEN_WIDTH,
    overflow: "hidden",
  },
});
