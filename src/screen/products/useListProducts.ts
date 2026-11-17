import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/type";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const useListProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onClickProduct = (product: Product) => {
    navigation.navigate("Detail", { productId: product.id });
  };

  return onClickProduct;
};

export default useListProducts;
