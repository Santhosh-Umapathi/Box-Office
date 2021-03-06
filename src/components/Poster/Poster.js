import React, {useRef, useEffect} from 'react';
import { View, Text,  StyleSheet, TouchableOpacity, ImageBackground, Animated} from 'react-native';
//Linear Gradient
import { LinearGradient } from 'expo-linear-gradient';

//Animations
import { animate } from '../../animations/animations';
//Utils
import {timeConvert, genreHandler} from '../../utils/utils'

//Styles
import { imageStyle } from '../../styles/styles';


const Poster = ({movie, open, setOpen, setMovie}) =>
{
    //Refs
    const slideView = useRef(new Animated.Value(0)).current;

    //Movie Details
    const id = movie.id
    const title = movie.title
    const poster = movie.poster
    const releaseDate = new Date(movie.releaseDate).getFullYear()
    const genre = genreHandler(movie.details.genres)
    const runTime = timeConvert(movie.details.runtime)

    //Constants
    const transformStyle = {transform : [{ translateY : slideView}]}
    const linearColors = ['transparent', 'transparent', 'black', 'black']


    //Reusable UI Components
    const footerText = text => <Text style = {styles.subTitle}>{text}</Text>
    const dot = <Text style = {styles.dot}>{'\u2B24'}</Text>



    //Open Button Action
    const openButtonHandler = () =>
    {
        setOpen(true)
        setMovie(id)
    }


    //Animate Poster
    useEffect(() => 
    {
        if(open)
            animate(slideView, -100, 200)
        else
            animate(slideView, 0, 200)        
    }, [open])


    //UI
    return (
        <Animated.View style = {[styles.imageContainer, transformStyle]}>

            <ImageBackground source = {{uri:poster}} style = {imageStyle}>

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

                    <TouchableOpacity onPress = {openButtonHandler}>
                        <Text style = {styles.button}>Open</Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </Animated.View>
    );
};

//Styles
const styles = StyleSheet.create({ 
    imageContainer:
    {
        width: "100%",
        height:'70%'
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
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent:'center',
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