import * as React from "react";
import styles from "./styles";
import { Text, View } from "../../components/Themed";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import categories from "../../assets/data/categories";
import HomeCategory from "../../components/HomeCategory";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
