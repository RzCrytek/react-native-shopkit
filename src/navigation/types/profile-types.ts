export type ProfileStackParamList = {
  ProfileMe: undefined;
  Support: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ProfileStackParamList {}
  }
}
