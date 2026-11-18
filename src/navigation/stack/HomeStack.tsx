import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListProductsScreen from "../../screen/tabs/home/products/ListProductsScreen";
import DetailProductScreen from "../../screen/tabs/home/detailProduct/DetailProductScreen";
import { HomeStackParamList } from "../types/home-types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitle: "Volver" }}>
      <Stack.Screen name='Home' component={ListProductsScreen} />
      <Stack.Screen name='Detail' component={DetailProductScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
