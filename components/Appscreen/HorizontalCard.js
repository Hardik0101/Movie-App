import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Colors } from "../../constant/style";

const SCREEN_WIDTH = Dimensions.get("window").width;

function HorizontalCard({ children }) {
  const images = [];
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
          <Image
            style={styles.image}
            source={require("../../assets/image/step1.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/image/step1.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/image/step1.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/image/step1.png")}
          />
        </ScrollView>
      </View>
    </>
  );
}

export default HorizontalCard;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: Colors.primary200,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 10,
  },
  image: {
    padding: 2,
    marginRight: 8,
    borderRadius: 4,
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
