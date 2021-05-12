import * as React from "react";
import styles from "./styles";
import { Text, View } from "../Themed";
import { Image, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from "../../assets/data/categories";
import { useNavigation } from "@react-navigation/native";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: Movie[];
  };
}
interface Movie {
  id: string;
  poster: string;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const navigation = useNavigation();

  const onPressMovie = (movie: Movie) => {
    navigation.navigate("MovieDetailScreen", { id: movie.id });
  };

  return (
    <View>
      <Text style={styles.title}>{props.category.title}</Text>
      <FlatList
        data={props.category.movies}
        horizontal
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => onPressMovie(item)}>
              <Image
                style={styles.image}
                source={{
                  uri: item.poster,
                }}
              />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default HomeCategory;
