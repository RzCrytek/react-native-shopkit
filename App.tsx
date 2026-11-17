import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProductsScreen from "./src/screen/products/ListProductsScreen";
import DetailProductScreen from "./src/screen/detailProduct/DetailProductScreen";
import { RootStackParamList } from "./src/navigation/type";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={ListProductsScreen} />
        <Stack.Screen name='Detail' component={DetailProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
