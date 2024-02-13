import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Colors } from "./constant/style";
import IconButton from "./components/UI/IconButton";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";
import OnboardingScreen1 from "./screens/OnBoardingScreen";
import Favorite from "./screens/Favorite";
import MovieScreen from "./screens/MovieScreen";
import TvShowScreen from "./screens/TvScreen";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { MoviesDetails } from "./Api/MoviesDetails";
import { TvShowDetails } from "./Api/TvDetails";

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
    >
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnboardingScreen1}
        options={{
          title: "Steps ",
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedTab() {
  const authCtx = useContext(AuthContext);
  return (
    <>
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
        sceneContainerStyle={{ backgroundColor: Colors.primary10 }}
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
          component={TvShowScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="tv-outline" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

function CombineStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary700 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary50 },
        headerTitleAlign: "center",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="New"
        component={AuthenticatedTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MoviesDetails"
        component={MoviesDetails}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton icon="bookmark-outline" color={tintColor} size={24} />
          ),
        }}
      />
      <Stack.Screen
        name="TvShowDetails"
        component={TvShowDetails}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton icon="bookmark-outline" color={tintColor} size={24} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <CombineStack />}
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
