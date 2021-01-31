import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet} from 'react-native';

//Bottom Sheet
import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheetRender from '../components/BottomSheet/BottomSheet';

//Utils
import { genreHandler, timeConvert } from '../utils/utils';





const DetailsScreen = ({movie, open, setOpen, isLoading}) =>
{

    //Refs
    const sheetRef = useRef(null);

    //State
    const [data, setData] = useState(null)


    //Get Movie Details
    useEffect(() => 
    {
      setData(movie)
    }, [movie])


    //Animation for Bottom Sheet
    useEffect(() => 
    {
      if(open)
      {
        sheetRef.current.snapTo(0)
      }
    }, [open])
    
    
    //Bottom Sheet Close Handler
    const closeHandler = () =>
    {
      sheetRef.current.snapTo(1)
      setOpen(false)
    }


    

    // console.log("DATA =>", data)
    let title, releaseDate, poster, genre, runtime, rating, description, cast

    if(data)
    {
       title = data?.title
       releaseDate = new Date(data?.releaseDate).getFullYear()
       poster = data?.poster
       genre =  genreHandler(data?.details.genres)
       runtime = timeConvert(data?.details.runtime)
       rating = data?.rating
       description = data?.overview
       cast = data?.credits?.cast
    }
    

 


    const renderContent = () => 
    {
      
        return <BottomSheetRender 
          open={open} 
          isLoading={isLoading}
          poster={poster}
          releaseDate={releaseDate} 
          closeHandler={closeHandler} 
          title={title}
          genre={genre}
          runtime={runtime}
          rating={rating}
          description={description}
          cast={cast}
        />
        
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
          onCloseEnd = {closeHandler}
          enabledBottomInitialAnimation = {true}
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