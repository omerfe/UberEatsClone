import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({order}) => {

    const navigation = useNavigation();
  return (
    <Pressable style={styles.root} onPress={() => navigation.navigate("Order", {id: order.id})}>
        <Image source={{uri: order.Restaurant.image }} style={styles.image} />
        <View>
            <Text style={styles.name}>{order.Restaurant.name}</Text>
            <Text style={{marginVertical: 5}}>3 Items &#8226; $38.45</Text>
            <Text>2 days ago &#8226; {order.status}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row', margin: 10, alignItems: 'center'
    },
    image: {
        width: 75, height: 75, marginRight: 5
    },
    name: {
        fontWeight: '600', fontSize: 16
    }
})

export default OrderListItem