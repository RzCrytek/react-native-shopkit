export type CategoryStackParamList = {
  CategoryList: undefined;
  CategoryDetail: { categoryId: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CategoryStackParamList {}
  }
}
