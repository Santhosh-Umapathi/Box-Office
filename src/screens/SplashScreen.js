import React from 'react';
import { View, StyleSheet, Dimensions, Image} from 'react-native';

const SplashScreen= () =>
{
    const { width, height } = Dimensions.get('window');

    return (
        <View style={[styles.splash, {width, height}]}>
            <Image source = {require('../../assets/morphin.gif')} style={styles.image}/> 
        </View>
    );
        
}


const styles = StyleSheet.create({
    splash:
    {
        backgroundColor:'#2786B5', 
        justifyContent:'center', 
        alignItems:'center'
    },
    image:
    {
        width:'100%', 
        height:'60%'
    }
    
});

export default SplashScreen