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

function HorizontalCard({ children, onPress, data1 }) {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await data1();
      setData(popularData);
    };

    fetchData();
  }, []);
  return (
    <>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          style={styles.scroll}
          snapToAlignment="center"
          snapToInterval={SCREEN_WIDTH}
          decelerationRate={"fast"}
        >
          {datas.map((data, index) => (
            <TouchableOpacity
              key={index}
              style={styles.imageContent}
              onPress={onPress}
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

export default HorizontalCard;

const styles = StyleSheet.create({
  imageContent: {
    flexDirection: "row",
  },
  container: {
    // padding: 6,
    height: 500,
    // backgroundColor: Colors.primary200,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 10,
    overflow: "hidden",
  },
  image: {
    padding: 2,
    borderRadius: 10,
    width: SCREEN_WIDTH,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary600,
    textAlign: "center",
  },
  scroll: {
    width: "100%",
  },
});
