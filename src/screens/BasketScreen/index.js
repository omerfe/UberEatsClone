import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../context/BasketContext";
import {useOrderContext} from "../../context/OrderContext";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
  const {restaurant, basketDishes, totalPrice} = useBasketContext();
  const {createOrder} = useOrderContext();
  const navigation = useNavigation();

  const onCreateOrder = async () => {
    await createOrder();
    navigation.goBack();
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>
      <Text style={styles.header}>Your Items</Text>
      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View style={styles.seperator} />
      <Pressable style={styles.button} onPress={onCreateOrder}>
        <Text style={styles.buttonText}>Create Order &#8226; ${totalPrice.toFixed(2)}</Text>
      </Pressable>
    </View>
  );
};

export default BasketScreen;
