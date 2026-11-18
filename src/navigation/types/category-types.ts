export type CategoryStackParamList = {
  Categories: undefined;
  Detail: { categoryId: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CategoryStackParamList {}
  }
}
