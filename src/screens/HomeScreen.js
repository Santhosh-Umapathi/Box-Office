import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList , SafeAreaView, StatusBar} from 'react-native';

//GraphQL
import { trendingMovies } from '../graphQl/axios';
import { TRENDING_MOVIES } from '../graphQl/queries';

//Components
import Card from '../components/Card/Card';
import Poster from '../components/Poster/Poster';
import DetailsScreen from './DetailsScreen';







const HomeScreen = (props) =>
{


    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)
    const [openDetails, setOpenDetails] = useState(false)
    const [movie, setMovie] = useState(null)
    

    //GraphQL Request
    const fetchData = async () =>
    {
        setIsLoading(true)

        const randomNum = Math.floor(Math.random() * 9)
        const response = await trendingMovies.post("",{query: TRENDING_MOVIES})
        const results = response.data.data.movies.trending.edges

        setData(results)
        setRandomMovie(results[randomNum].node)  
        setMovie(results[randomNum].node)      
        setIsLoading(false)
    }

  
    //Get Trending Movies
    useEffect(() => 
    {
      fetchData()
    }, [])

  
    

    const setMovieHandler = (id) =>
    {
      const selectedMovie = data.filter(item => item.node.id === id)
      setMovie(selectedMovie)
    }



    if(isLoading === true)
    {      
      return <Text>Loading</Text>
    }
   
    return (
    <View style={styles.container}>

      <Poster movie = {randomMovie} open = {openDetails} setOpen = {setOpenDetails} setMovie = {setMovieHandler}/>

      <DetailsScreen movie = {movie} open = {openDetails} setOpen = {setOpenDetails}/>

      <View style = {styles.footer}>
        <FlatList
          horizontal
          data={data}
          renderItem={({item})=> <Card movie = {item.node} setMovie = {setMovieHandler} setOpen = {setOpenDetails}/>}
          keyExtractor={item => item.node.id.toString()}
        />
      </View>
      
    </View>
  );
    
};

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      justifyContent:"flex-start",
      alignItems:'stretch',
    },
    footer:
    {
      position:'absolute',
      bottom: 20,
    }
 
   
  });

export default HomeScreen;