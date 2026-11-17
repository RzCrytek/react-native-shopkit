import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/type";
import { useDetailProduct } from "./useDetailProduct";
import { style } from "./DetailProductStyle";

type DetailRouteProp = NativeStackScreenProps<RootStackParamList, "Detail">;

const DetailProductScreen = ({ route }: DetailRouteProp) => {
  const { productId } = route.params;
  const product = useDetailProduct(productId);

  return (
    <SafeAreaView style={style.safeArea} edges={["top"]}>
      <ScrollView style={style.scrollView}>
        <Image source={{ uri: product.thumbnail }} style={style.image} />

        <View style={style.content}>
          <Text style={style.title}>{product.title}</Text>
          <Text style={style.price}>${product.price.toFixed(2)}</Text>
          <Text style={style.description}>{product.description}</Text>
          <TouchableOpacity style={style.addToCart} onPress={() => console.log("Add to Cart pressed")}>
            <Text style={style.addToCartText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailProductScreen;
