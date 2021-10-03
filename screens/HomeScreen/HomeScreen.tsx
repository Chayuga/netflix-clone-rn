import * as React from "react";
import styles from "./styles";

import EditScreenInfo from "../../components/EditScreenInfo";
import categories from "../../assets/data/categories";

import { Image, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

const firstCategory = categories.items[0];

const HomeScreen = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dummy title</Text>
      <FlatList
        data={firstCategory.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </View>
  );
};

// My Styles are declaired in a seperate screen, to keep them clean

export default HomeScreen;
