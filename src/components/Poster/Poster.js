import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, Flatlist } from 'react-native';

const Poster = ({url}) =>
{



    return (
        <View style={styles.containerView}>
            <Image
                source = {{uri:url}}
                style = {styles.image}
            />

            <View style = {styles.body}>
                <Text style = {styles.title}>Title</Text>

                <View>
                    <Text style = {styles.subTitle}>2020</Text>
                    <Text style = {styles.subTitle}>Sci/Thriller</Text>
                    <Text style = {styles.subTitle}>127 Mins</Text>

                </View>

                <Button 
                    onPress = {() => console.log("Open")}
                    title = "Open"
                />
                



            </View>
        </View>
        );
};

const styles = StyleSheet.create({
    containerView:
    {
        height: '70%',
        backgroundColor:"rgba(0,0,0,0.5)"
    },
    image:
    {
        width:"100%",
        height:'100%',
        opacity: 0.5,
    },
    body:
    {
        display:'flex',
        position:'absolute',
        top:"40%"
    },
    title:
    {
        fontSize: 30,
        color:'white'
    },
    subTitle:
    {
        fontSize: 20,
        color:'white'

    }
    
});

export default Poster;