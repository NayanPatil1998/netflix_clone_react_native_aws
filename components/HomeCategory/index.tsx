import * as React from "react";
import styles from "./styles";
import { Text, View } from "../Themed";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from "../../assets/data/categories";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.category.title}</Text>
      <FlatList
        data={props.category.movies}
        horizontal
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{
                uri: item.poster,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeCategory;
