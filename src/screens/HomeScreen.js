import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';

//GraphQL
import { TRENDING_MOVIES, MOVIE_DETAILS } from '../graphQl/queries';
import { graphQl } from '../graphQl/apollo';

//Components
import Poster from '../components/Poster/Poster';
import DetailsScreen from './DetailsScreen';
import CardList from '../components/Card/CardList';
import Spinner from '../components/Spinner/Spinner';
import SplashScreen from './SplashScreen';






const HomeScreen = () =>
{


    //State
    const [isLoading, setIsLoading] = useState(true)
    const [detailsIsLoading, setDetailsIsLoading] = useState(null)
    const [openDetails, setOpenDetails] = useState(false)
    const [data, setData] = useState([])
    const [movie, setMovie] = useState(null)
    const [movieData, setMovieData] = useState(null)
    const [showSplashScreen, setShowSplashScreen] = useState(true)


    const setMovieHandler = (id) => setMovie(id)


    //GraphQL Request
    const fetchTrendingMovies = async () =>
    {
        setIsLoading(true)
        const randomNum = Math.floor(Math.random() * 9)
        const response = await graphQl.query({query: TRENDING_MOVIES})
        const results = response.data.movies.trending.edges

        setData(results)
        setMovieData(results[randomNum].node)  
        setIsLoading(false)
    }

    //GraphQL Request
    const fetchMovieDetails = async () =>
    {
      setDetailsIsLoading(true)
      const response = await graphQl.query({ query: MOVIE_DETAILS(movie) })
      const results = response.data.movies.movie

      setMovieData(results)
      setDetailsIsLoading(false)
    }
  
    //Get Trending Movies
    useEffect(() => 
    {
      //Splash Screen
      setTimeout(() => 
      {
        setShowSplashScreen(false)
      }, 5000);

      fetchTrendingMovies()
    }, [])

    //Get Movie Details
    useEffect(() => 
    {
      if(movie)
        fetchMovieDetails()
    }, [movie])
    
    



    return (
        showSplashScreen 
        ? <SplashScreen /> 
        : isLoading 
          ? <Spinner />
          : <View style={styles.container}>
              <Poster 
                movie = {movieData} 
                open = {openDetails} 
                setOpen = {setOpenDetails} 
                setMovie = {setMovieHandler}
              />
      
              <DetailsScreen 
                movie = {movieData} 
                open = {openDetails} 
                setOpen = {setOpenDetails} 
                isLoading = {detailsIsLoading}
              />
        
              <CardList 
                data = {data} 
                open = {openDetails} 
                setOpen = {setOpenDetails} 
                setMovie = {setMovieHandler}
              />
      
            </View>
  );
    
};

//Styles
const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    justifyContent:"flex-start",
  }
});

export default HomeScreen;