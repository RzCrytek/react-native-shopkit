import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export const styles = StyleSheet.create({
  header: {
    padding: 12,
    backgroundColor: theme.colors.accent, // background-color color of the header
    borderBottomLeftRadius: 12, // border-bottom-left-radius of the header
    borderBottomRightRadius: 12, // border-bottom-right-radius of the header
  },
  header_title: {
    fontSize: 18, // font-size of the header title
    fontWeight: "700", // font-weight of the header title
    color: theme.colors.text,
  },
  list: {
    padding: 12,
  },
  card: {
    flex: 1,
    margin: 6,
    backgroundColor: "#fff", // background-color of the card
    borderRadius: 12,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 12, // border-radius of the image
  },
  name: {
    fontSize: 13, // font-size of the name
    fontWeight: "600", // font-weight of the name
    marginTop: 6, // margin-top of the name
  },
  price: {
    fontSize: theme.typography.price.fontSize, // font-size of the price
    fontWeight: "700", // font-weight of the price
    color: theme.colors.accent,
  },
});
