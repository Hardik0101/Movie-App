import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constant/style";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        color={Colors.primary200}
        size={20}
        style={{ marginRight: 4 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: Colors.primary700,
  },
});

export default SearchComponent;
