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
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TvScreen from "./screens/TvScreen";
import MovieScreen from "./screens/MovieScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthStack() {
  return (
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
      // initialRouteName="Login"
    >
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          title: "Steps ",
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary500,
        tabBarActiveBackgroundColor: Colors.primary100,
        headerStyle: { backgroundColor: Colors.primary700 },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerLeft: () => (
          <IconButton icon="videocam-outline" color="white" size={30} />
        ),
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="exit-outline"
            color={tintColor}
            size={24}
            onPress={authCtx.logout}
          />
        ),
      }}
      sceneContainerStyle={{ backgroundColor: Colors.primary50 }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => null,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerBackVisible: false,
        }}
      />
      <BottomTab.Screen
        name="Movies"
        component={MovieScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TvShow"
        component={TvScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen name="Details" component={DetailsScreen} />
    </BottomTab.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
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
