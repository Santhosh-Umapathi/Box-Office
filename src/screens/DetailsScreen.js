import React, {useEffect, useRef, useState} from 'react';
import { View, Text, StyleSheet, Button, Image, Flatlist, Animated } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';

//Animation 
import { animate } from '../animations/animations';

//GraphQL
import {moviesGraphQL} from '../graphQl/axios'
import {MOVIE_DETAILS} from '../graphQl/queries'

//Components
import Spinner from '../components/Spinner/Spinner';



const DetailsScreen = ({movie, open, setOpen}) =>
{

    //Refs
    const fadeRef = useRef(new Animated.Value(0)).current;
    const sheetRef = useRef(null);

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    // console.log("MOVIE =>>",movie)

    const fetchMovieDetails = async () =>
    {
      const response = await moviesGraphQL.post("", {query: MOVIE_DETAILS(movie.id)})

      const results = response.data.data.movies.movie

      setData(results)
      setIsLoading(false)
    }

    useEffect(() => 
    {
      fetchMovieDetails()
    }, [])

  
    
    //Animation for Bottom Sheet
    useEffect(() => 
    {
      if(open)
        {
          animate(fadeRef, 1, 100)
          sheetRef.current.snapTo(0)
        }
      else
        animate(fadeRef, 0, 100)
    }, [open])
    

    const closeHandler = () =>
    {
      sheetRef.current.snapTo(1)
      setOpen(false)
    }


    console.log("DATA =>", data)

    





    const renderContent = () => 
    {
      
        return <Animated.View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 500,
            opacity:fadeRef,
          }}
        >

          {
            isLoading === true && open 
            ? <Spinner />
            : <>
                <Text>Swipe down to close</Text>
                <Button title = "Close" onPress = {closeHandler}/>
              </>
          }
          
        </Animated.View>
    }



    return (
        <View style={styles.containerView}>
            <BottomSheet
                ref={sheetRef}
                snapPoints={["60%","30%"]}
                borderRadius={10}
                renderContent={renderContent}
                initialSnap = {1}
                onCloseStart = {closeHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerView:
    {
      display: 'flex',
      flex: 1,
    },
});

export default DetailsScreen;