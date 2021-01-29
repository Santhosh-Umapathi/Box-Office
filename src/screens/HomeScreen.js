import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList , SafeAreaView, StatusBar} from 'react-native';

//GraphQL
import { trendingMovies } from '../graphQl/axios';
import { TRENDING_MOVIES } from '../graphQl/queries';

//Components
import Card from '../components/Card/Card';







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
  
   
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal
            data={data}
            renderItem={({item})=> <Card item = {item}/>}
            keyExtractor={item => item.node.id.toString()}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "grey",
    },
 
   
  });

export default HomeScreen;