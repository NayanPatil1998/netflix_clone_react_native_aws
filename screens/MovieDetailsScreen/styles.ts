import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#00AA00",
    fontWeight: "bold",
    marginRight: 15,
  },
  year: {
    color: "#757575",
    marginRight: 10,
  },
  ageContainer: {
    backgroundColor: "#e6e299",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 6,
    marginRight: 10,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  seasons: {
    color: "#757575",
    marginRight: 10,
  },
  playButton: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  playButtonText: {
    color: "black",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default styles;
