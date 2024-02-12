import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

function HomeScreen() {
  return (
    <ScrollView style={styles.scroll} horizontal={true}>
      <Image
        style={styles.image}
        source={require("../assets/image/step1.png")}
      />
      <Image
        style={styles.image}
        source={require("../assets/image/step1.png")}
      />
      <Image
        style={styles.image}
        source={require("../assets/image/step1.png")}
      />
      <Image
        style={styles.image}
        source={require("../assets/image/step1.png")}
      />
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scroll: {
    // padding: 4,
  },
  image: {
    padding: 2,
    marginLeft: 8,
  },
});
