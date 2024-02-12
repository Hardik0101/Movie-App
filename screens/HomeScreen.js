import {
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import MovieScreenCard from "../components/Appscreen/ScreenCard";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Details");
  }
  return (
    <>
      <View>
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
        <MovieScreenCard children="New" onPress={handlePress} />
      </View>
    </>
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
