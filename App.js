import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "./constant/style";
import IconButton from "./components/UI/IconButton";
import LoginScreen from "./screens/LoginScreen";
import DetailsScreen from "./screens/DetailsScreen";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import SignupScreen from "./screens/SignUpScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary700 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Colors.primary50 },
            headerTitleAlign: "center",
            headerTitleStyle: { fontWeight: "bold" },
            headerLeft: () => (
              <IconButton icon="videocam-outline" color="white" size={30} />
            ),
          }}
        >
          <Stack.Screen name="Steps" component={OnBoardingScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerRight: () => (
                <IconButton
                  icon="person-circle-outline"
                  color="white"
                  size={30}
                />
              ),
            }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
