import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./stack/HomeStack";
import CategoryStack from "./stack/CategoryStack";
import CartStack from "./stack/CartStack";
import ProfileStack from "./stack/ProfileStack";
import renderTabBarIcon from "./tabBarIcon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => renderTabBarIcon(route.name, focused),
        headerShown: false,
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name='Categories' component={CategoryStack} options={{ headerShown: false }} />
      <Tab.Screen name='Cart' component={CartStack} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={ProfileStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
