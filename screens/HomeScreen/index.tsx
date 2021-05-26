import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Text, View } from "../../components/Themed";
import { DataStore } from "aws-amplify";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeCategory from "../../components/HomeCategory";
import { Category } from "../../src/models";

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await DataStore.query(Category));
    };
    fetchCategories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
