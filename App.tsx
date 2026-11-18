import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./src/navigation/TabNavigation";
import { RootStackParamList } from "./src/navigation/types/root-types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TabNavigation' component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
