import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, Flatlist } from 'react-native';

const Card = (props) =>
{



    const {item} = props

    return (
    <View style={styles.card}>

        <Image 
          source = {{uri: item.node.poster}}
          style = {styles.image}
        />
        
        {/* <Text style={styles.title}>{item.node.title}</Text>
        
        <Text style={styles.subTitle}>{new Date(item.node.releaseDate).toLocaleDateString()}</Text>
         */}
        

    </View>
    );
};

const styles = StyleSheet.create({
    card:
    {
        display:'flex',
        alignSelf:'flex-end',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 200,
        height:300,
        borderRadius: 10,
        elevation: 15,
        shadowColor: "orange",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        overflow:'hidden',

    },
    title: 
    {
        fontSize: 20,
    },
    subTitle:
    {
        fontSize: 12
    },
    image:
    {
        alignSelf:"stretch",
        width: 200,
        height: 300,
        position:"absolute",
    }
});

export default Card;