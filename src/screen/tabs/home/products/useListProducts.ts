import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../../../../navigation/types/home-types";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const useListProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const onClickProduct = (product: Product) => {
    navigation.navigate("Detail", { productId: product.id });
  };

  return onClickProduct;
};

export default useListProducts;
