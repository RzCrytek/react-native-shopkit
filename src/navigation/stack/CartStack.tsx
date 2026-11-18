import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartPayScreen from "../../screen/tabs/cart/cartPay/CartPayScreen";
import CartSummaryScreen from "../../screen/tabs/cart/cartSummary/CartSummaryScreen";
import { CartStackParamList } from "../types/cart-types";

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='cartSummary' component={CartSummaryScreen} />
      <Stack.Screen name='cartPay' component={CartPayScreen} />
    </Stack.Navigator>
  );
};
export default CartStack;
