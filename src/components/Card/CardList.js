import React, {useRef, useEffect}  from 'react';
import { StyleSheet, FlatList, Animated } from 'react-native';
//Animation
import { animate } from '../../animations/animations';
//Components
import Card from './Card';



const CardList = ({data, open, setMovie, setOpen}) =>
{

    //Refs
    const fadeRef = useRef(new Animated.Value(1)).current;

    //Animate Card
    useEffect(() => 
    {
        if(open)
            animate(fadeRef, 0, 200)
        else
            animate(fadeRef, 1, 200)        
    }, [open])



    //Cards for Data
    const renderItem = ({item}) =>
    (
        <Card 
            movie = {item.node} 
            setMovie = {setMovie} 
            setOpen = {setOpen}
        />
    )


    return (
        <Animated.View style = {[styles.cardList, {opacity: fadeRef}]}>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.node.id.toString()}
            />
        </Animated.View>
        );
};

const styles = StyleSheet.create({
    cardList:
    {
      position:'absolute',
      bottom: 20,
    }    
});

export default CardList;