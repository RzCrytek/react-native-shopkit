import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListProductsScreen from "../screen/tabs/home/products/ListProductsScreen";
import ListCategoriesScreen from "../screen/tabs/category/categories/ListCategoriesScreen";
import CartSummaryScreen from "../screen/tabs/cart/cartSummary/CartSummaryScreen";
import ProfileScreen from "../screen/tabs/profile/profile-me/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={ListProductsScreen} />
      <Tab.Screen name='Categories' component={ListCategoriesScreen} />
      <Tab.Screen name='Cart' component={CartSummaryScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
