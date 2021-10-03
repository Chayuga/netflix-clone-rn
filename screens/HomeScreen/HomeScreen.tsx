import * as React from "react";
import styles from "./styles";

import EditScreenInfo from "../../components/EditScreenInfo";
import categories from "../../assets/data/categories";

import { Image, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import HomeCategory from "../../components/HomeCategory";

const firstCategory = categories.items[0];

const HomeScreen = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.container}>
      {/* List of categories */}
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

// My Styles are declaired in a seperate screen, to keep them clean

export default HomeScreen;
