import React, {useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Image, Animated, FlatList} from 'react-native';

//Animation
import { animate } from '../../animations/animations';

//Components
import Spinner from '../Spinner/Spinner';

//Icons
import { AntDesign } from '@expo/vector-icons'; 
import StarRating from 'react-native-star-rating';

const BottomSheetRender= (props) =>
{

    //Props
    const {
        open, 
        isLoading,
        poster,
        releaseDate, 
        closeHandler, 
        title,
        genre,
        runtime,
        rating,
        description,
        cast
    } = props

    //Refs
    const fadeRef = useRef(new Animated.Value(0)).current;

    //Animation for Render Item
    useEffect(() => 
    {
      if(open)
        animate(fadeRef, 1, 100)
      else
        animate(fadeRef, 0, 100)
    }, [open])

    //Flatlist render item
    const flatListItem = ({item}) =>
    {
        const character = item.character.split('(').shift()

        return (
        <View style = {styles.castContainer}>
            <Image source = {{uri: item.value.profilePicture}} style={styles.profileImage}/>
            <Text style = {styles.name}>{item.value.name}</Text>
            <Text style = {styles.character}>{character}</Text>
        </View>
        )
    }

    //Resuable Text UI
    const text = (text, style) => <Text style = {style}>{text}</Text>

    //Ui
    return (
        <Animated.View style={[styles.animatedView, {opacity:fadeRef}]}>
          {
            isLoading
            ? <Spinner />
            : <>
              <View style = {styles.header}>
                    <Image source = {{uri: poster}} style={styles.poster}/>

                    <View style = {styles.mainContent}>
                    <View style ={styles.headerContent}>
                        {text(releaseDate, styles.date)}
                        <AntDesign name="down" size={24} color="black" onPress = {closeHandler}/>
                    </View>

                    <View style ={styles.headerContainer}>
                        {text(title, styles.title)}
                        {text(genre, styles.genre)}
                        {text(runtime, styles.runtime)}
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={rating/2}
                            fullStarColor={'gold'}
                            emptyStarColor = {'grey'}
                            starSize = {15}
                            starStyle = {{margin:2}}
                        />
                    </View>
                    </View>
              </View>  

              <View style = {{marginTop:20}}>
                {text("Description", styles.description)}
                {text(description)}
              </View>

              <View style = {styles.cast}>
                {text("Cast", styles.description)}

                <FlatList
                    horizontal
                    data={cast}
                    keyExtractor={key => key.value.name}
                    renderItem={flatListItem}
                />
              </View>
            </>
          }
        </Animated.View>
    );
};

//Styles
const styles = StyleSheet.create({
    animatedView:
    {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        display:'flex',
        zIndex: 500
    },
    header:
    {
        display:'flex', 
        flexDirection:'row', 
    },
    poster:
    {
        height: 150, 
        width: 120
    },
    mainContent:
    {
        display:'flex',
        flex:1,
        flexDirection:'column', 
        justifyContent:'flex-start', 
        marginLeft:10
    },
    headerContent:
    {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'flex-end'
    },
    title:
    {
        fontSize: 25, 
        fontWeight:'800', 
        letterSpacing: 2, 
        marginVertical:5
    },
    date:
    {
        fontSize: 12, 
        fontWeight:'300'
    },
    headerContainer:
    { 
        justifyContent:'flex-start', 
        alignItems:'flex-start'
    },
    genre:
    {
        fontSize: 12, 
        fontWeight:'300'
    },
    runtime:
    {
        fontSize: 12, 
        color:'grey'
    },
    description:
    {
        fontWeight:'bold', 
        marginBottom:5
    },
    cast:
    {
        marginTop:15, 
        marginBottom: 300
    },
    character:
    {
        fontSize:10, 
        color:'grey'
    },
    name:
    {
        fontSize:10, 
        marginTop:5
    },
    profileImage:
    {
        width:80, 
        height:80, 
        borderRadius:50
    },
    castContainer:
    { 
        display:'flex',
        alignItems: 'center', 
        justifyContent:"flex-start", 
        marginRight:10, 
        width:80
    }










});

export default BottomSheetRender;