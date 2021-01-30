import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Card = ({movie, setMovie, setOpen}) =>
{


    const cardClickHandler = () =>
    {
        setMovie(movie.id)
        setOpen(true)
    }


    return (
    <View style={[styles.card, styles.dimensions]}>

        <TouchableOpacity onPress = {cardClickHandler} activeOpacity = {0.8}>
            <Image source = {{uri: movie.poster}} style = {styles.dimensions} />    
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
        shadowOpacity: 0.25,
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