import { View, Text, TextInput, StyleSheet, Icon } from "react-native";
import { Colors } from "../../constants/styles";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,

    borderBottomColor: Colors.primary100,
    borderBottomWidth: 2,
    fontSize: 16,
    color: Colors.primary100,
    fontWeight: "700",
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
