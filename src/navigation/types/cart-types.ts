export type CartStackParamList = {
  cartSummary: undefined;
  cartPay: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CartStackParamList {}
  }
}
