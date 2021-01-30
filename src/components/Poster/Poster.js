import React, {useState, useRef} from 'react';
import { View, Text,  StyleSheet, TouchableOpacity, ImageBackground, StatusBar, Button , Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




const Poster = ({movie, open, setOpen}) =>
{


    const timeConvert = (num) =>
    { 
        const hours = Math.floor(num / 60);  
        const minutes = num % 60;
        return hours+"h " + minutes+"m";         
    }

    //Constants
    const title = movie.title
    const poster = movie.poster
    const releaseDate = new Date(movie.releaseDate).getFullYear()
    const genre = movie.details.genres.map((item, index) => 
    {
        let i
        if(index+1 !== movie.details.genres.length)
            i = item.name+"/"
        else
            i = item.name

        return i
    })
    const runTime = timeConvert(movie.details.runtime)
    const linearColors = ['transparent', 'transparent', 'black', 'black']
    

    //Reusable UI Components
    const footerText = text => <Text style = {styles.subTitle}>{text}</Text>
    const dot = <Text style = {styles.dot}>{'\u2B24'}</Text>

    return (
            
        <View style = {styles.imageContainer}>

            <ImageBackground source = {{uri:poster}} style = {styles.imageBackground}>

                <LinearGradient colors={linearColors} style={styles.gradient} />

                <View style = {styles.body}>
                    <Text style = {styles.title}>{title}</Text>

                    <View style = {styles.subTitleContainer}>
                        {footerText(releaseDate)} 
                        {dot} 
                        {footerText(genre)} 
                        {dot}                        
                        {footerText(runTime)}
                    </View>

                    <TouchableOpacity onPress = {() => setOpen(true)}>
                        <Text style = {styles.button}>Open</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({ 
    imageContainer:
    {
        width: "100%",
        height:'70%'
    },
    imageBackground:
    {
        width:"100%",
        height:'100%',
    },
    gradient:
    {
        position: 'absolute',
        flex:1,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        opacity:0.7
    },
    body:
    {
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        width: "100%",
        height:'100%',
    },
    title:
    {
        fontSize: 50,
        fontWeight:'bold',
        letterSpacing:3,
        color:'white',
        marginBottom:20
    },
    subTitleContainer:
    {
        display:'flex',
        alignItems: 'center',
        flexDirection:'row',
        marginBottom:20
    },
    subTitle:
    {
        fontSize: 16,
        color:'white',
    },
    dot:
    {
        color:'white',
        fontSize: 5,
        marginHorizontal: 5
    },
    button:
    {
        color:'white',
        fontSize:18,
        borderWidth:1,
        borderColor:'white',
        borderRadius:18,
        paddingVertical:5,
        paddingHorizontal: 40,
        marginBottom:50
    }    
});

export default Poster;