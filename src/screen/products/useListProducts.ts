interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const useListProducts = () => {
  const onClickProduct = (product: Product) => {
    console.log(product);
  };

  return onClickProduct;
};

export default useListProducts;
