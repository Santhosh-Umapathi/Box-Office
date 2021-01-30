import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList , SafeAreaView, StatusBar} from 'react-native';

//GraphQL
import { trendingMovies } from '../graphQl/axios';
import { TRENDING_MOVIES } from '../graphQl/queries';

//Components
import Card from '../components/Card/Card';
import Poster from '../components/Poster/Poster';







const HomeScreen = (props) =>
{


    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [randomMovie, setRandomMovie] = useState(null)


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

  
    if(isLoading === true)
    {      
      return <Text>Loading</Text>
    }
   


    
        return (
        <SafeAreaView style={styles.container}>

          <Poster movie = {randomMovie}/>

          <View style = {styles.footer}>
            <FlatList
              horizontal
              data={data}
              renderItem={({item})=> <Card item = {item}/>}
              keyExtractor={item => item.node.id.toString()}
            />
          </View>
          
        </SafeAreaView>
      );
    
};

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      justifyContent:"flex-start",
      alignItems:'stretch',
      marginTop: StatusBar.currentHeight || 0,
      // backgroundColor: "white",
    },
    footer:
    {
      position:'absolute',
      bottom: 20,
    }
 
   
  });

export default HomeScreen;