import * as React from "react";
import styles from "./styles";

import categories from "../../assets/data/categories";

import { Image, FlatList } from "react-native";
import { Text } from "../../components/Themed";

const firstCategory = categories.items[0];

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: { id: string; poster: string }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
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
    </>
  );
};

// My Styles are declaired in a seperate screen, to keep them clean

export default HomeCategory;
