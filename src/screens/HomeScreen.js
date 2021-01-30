import React, {useState, useEffect} from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';

//GraphQL
import { moviesGraphQL } from '../graphQl/axios';
import { TRENDING_MOVIES } from '../graphQl/queries';

//Components
import Poster from '../components/Poster/Poster';
import DetailsScreen from './DetailsScreen';
import CardList from '../components/Card/CardList';
import Spinner from '../components/Spinner/Spinner';






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
        const response = await moviesGraphQL.post("",{query: TRENDING_MOVIES})
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
      return <Spinner />
    }
   
    return (
    <View style={styles.container}>

      <Poster movie = {randomMovie} open = {openDetails} setOpen = {setOpenDetails} setMovie = {setMovieHandler}/>

      <DetailsScreen movie = {movie} open = {openDetails} setOpen = {setOpenDetails}/>

      <CardList 
        data = {data} 
        open = {openDetails} 
        setOpen = {setOpenDetails} 
        setMovie = {setMovieHandler}
      />

    </View>
  );
    
};

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      justifyContent:"flex-start",
    }
  });

export default HomeScreen;