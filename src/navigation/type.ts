export type RootStackParamList = {
  Home: undefined;
  ProductDetails: { productId: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
