import { Ionicons } from "@expo/vector-icons";

const renderTabBarIcon = (name: string, focused: boolean) => {
  switch (name) {
    case "Home":
      return <Ionicons name={focused ? "home" : "home-outline"} size={24} color='black' />;
    case "Categories":
      return <Ionicons name={focused ? "list" : "list-outline"} size={24} color='black' />;
    case "Cart":
      return <Ionicons name={focused ? "cart" : "cart-outline"} size={24} color='black' />;
    case "Profile":
      return <Ionicons name={focused ? "person" : "person-outline"} size={24} color='black' />;
  }
};

export default renderTabBarIcon;
