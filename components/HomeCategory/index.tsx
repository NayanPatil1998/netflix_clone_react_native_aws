import React, { useState, useEffect } from "react";
import styles from "./styles";
import { Text, View } from "../Themed";
import { Image, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from "../../assets/data/categories";
import { useNavigation } from "@react-navigation/native";
import { Category, Movie } from "../../src/models";
import { DataStore } from "@aws-amplify/datastore";

interface HomeCategoryProps {
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const navigation = useNavigation();

  const [movies, setMovies] = useState<Movie[]>([]);

  const onPressMovie = (movie: Movie) => {
    navigation.navigate("MovieDetailScreen", { id: movie.id });
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        (movie) => movie.categoryID === props.category.id
      );
      setMovies(result);
    };
    fetchMovies();
  }, []);
  return (
    <View>
      <Text style={styles.title}>{props.category.title}</Text>
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => onPressMovie(item!)}>
              <Image
                style={styles.image}
                source={{
                  uri: item?.poster,
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
