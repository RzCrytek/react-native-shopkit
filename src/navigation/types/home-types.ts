export type HomeStackParamList = {
  Home: undefined;
  Detail: { productId: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}
