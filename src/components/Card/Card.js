import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, Flatlist } from 'react-native';

const Card = (props) =>
{



    const {item} = props

    return (
    <View style={[styles.card, styles.dimensions]}>

        <TouchableOpacity onPress = {() => console.log("Pressed")}>
            <Image 
            source = {{uri: item.node.poster}}
            style = {styles.dimensions}
            />    
        </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({
    card:
    {
        alignSelf:'flex-end',
        margin: 10,
        //Card
        elevation: 15,
        shadowColor: "#252525",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 10,
    },
    dimensions:
    {
        width: 150,
        height: 250,
        borderRadius: 10,
    }
});

export default Card;