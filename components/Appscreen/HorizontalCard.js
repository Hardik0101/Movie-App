import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Colors } from "../../constant/style";

function HorizontalCard({ children }) {
  const images = [];
  return (
    <>
      <Text style={styles.text}>{children}</Text>
      <View style={styles.container}>
        <ScrollView horizontal={true} style={styles.scroll}>
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
