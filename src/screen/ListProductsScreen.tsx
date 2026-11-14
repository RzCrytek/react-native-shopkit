import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import products from "../data/products.json";
import useListProducts from "./useListProducts";
import { styles } from "./ListProductsStyle";

const ListProductsScreen = () => {
  const onClickProduct = useListProducts();

  const totalProducts = `${products.length} ${products.length > 1 ? "productos" : "producto"}`;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.header_title}>Catálogo</Text>

          {products.length > 0 && <Text style={styles.header_title}>{totalProducts}</Text>}
        </View>

        <FlatList
          keyExtractor={(item) => item.id}
          data={products}
          contentContainerStyle={styles.list}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onClickProduct(item)} style={styles.card}>
              <Image source={{ uri: item.thumbnail }} style={styles.image} />
              <Text style={styles.name}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ListProductsScreen;
