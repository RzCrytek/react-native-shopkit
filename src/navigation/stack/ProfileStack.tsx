import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screen/tabs/profile/profile-me/ProfileScreen";
import SupportScreen from "../../screen/tabs/profile/support/SupportScreen";
import { ProfileStackParamList } from "../types/profile-types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ProfileMe' component={ProfileScreen} />
      <Stack.Screen name='Support' component={SupportScreen} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
