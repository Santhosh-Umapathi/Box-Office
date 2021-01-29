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


    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])


    const fetchData = async () =>
    {
        setIsLoading(true)

        await trendingMovies.post("",{query: TRENDING_MOVIES})
        .then(res => setData(res.data.data.movies.trending.edges))
        .catch(e => console.log(e))
        .finally(() => setIsLoading(false))
    }
  
    //Get Trending Movies
    useEffect(() => 
    {
      fetchData()
    }, [])

  
   
    const randomPoster = Math.floor(Math.random() * 9)


    
      return (
        <SafeAreaView style={styles.container}>

          <Poster url = {data[randomPoster]?.node.poster}/>


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
    },
    footer:
    {
      position:'absolute',
      bottom: 20,
    }
 
   
  });

export default HomeScreen;