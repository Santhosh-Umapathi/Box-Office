import React, {useRef, useEffect}  from 'react';
import { StyleSheet, FlatList, Animated } from 'react-native';
//Animation
import { animate } from '../../animations/animations';
//Components
import Card from './Card';



const CardList = ({data, open, setMovie, setOpen}) =>
{
    //Refs
    const slideRef = useRef(new Animated.Value(0)).current;

    //Animate Card
    useEffect(() => 
    {
        if(open)
            animate(slideRef, 400, 200)
        else
            animate(slideRef, 0, 200)        
    }, [open])


    //Cards for Trending Movies List
    const renderItem = ({item}) =>
    (
        <Card 
            movie = {item.node} 
            setMovie = {setMovie} 
            setOpen = {setOpen}
        />
    )
    

    //UI
    return (
        <Animated.View style = {[styles.cardList, {transform: [{translateY:slideRef}]}]}>
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