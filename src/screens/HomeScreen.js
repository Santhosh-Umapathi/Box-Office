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
    

    //GraphQL Request
    const fetchData = async () =>
    {
        setIsLoading(true)

        const randomNum = Math.floor(Math.random() * 9)
        const response = await trendingMovies.post("",{query: TRENDING_MOVIES})
        const results = response.data.data.movies.trending.edges

        setData(results)
        setRandomMovie(results[randomNum].node)        
        setIsLoading(false)
    }

  
    //Get Trending Movies
    useEffect(() => 
    {
      fetchData()
    }, [])

    console.log(openDetails)
  



    if(isLoading === true)
    {      
      return <Text>Loading</Text>
    }
   
        return (
        <View style={styles.container}>

          <Poster movie = {randomMovie} open = {openDetails} setOpen = {setOpenDetails}/>

          <DetailsScreen />

          {/* <View style = {styles.footer}>
            <FlatList
              horizontal
              data={data}
              renderItem={({item})=> <Card item = {item}/>}
              keyExtractor={item => item.node.id.toString()}
            />
          </View> */}
          
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