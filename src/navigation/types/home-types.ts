export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: { productId: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}
