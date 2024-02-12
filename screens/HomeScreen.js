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
import HorizontalCard from "../components/Appscreen/HorizontalCard";
import SearchComponent from "../components/Appscreen/Search";

function HomeScreen() {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("Details");
  }
  return (
    <>
      <SearchComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hcard}>
          <HorizontalCard children="New show" />
        </View>
        <View style={styles.vcard}>
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
          <MovieScreenCard children="New" onPress={handlePress} />
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  hcard: {
    marginBottom: 10,
  },
  vcard: {
    marginHorizontal: 10,
  },
});
