import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListCategoriesScreen from "../../screen/tabs/category/categories/ListCategoriesScreen";
import DetailCategoryScreen from "../../screen/tabs/category/detailCategory/DetailCategoryScreen";
import { CategoryStackParamList } from "../types/category-types";

const Stack = createNativeStackNavigator<CategoryStackParamList>();

const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Categories' component={ListCategoriesScreen} />
      <Stack.Screen name='Detail' component={DetailCategoryScreen} />
    </Stack.Navigator>
  );
};
export default CategoryStack;
