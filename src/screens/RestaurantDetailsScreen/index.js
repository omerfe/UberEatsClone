import { View, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import DishListItem from "../../components/DishListItem";
import Header from "../RestaurantDetailsScreen/Header";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];
const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
