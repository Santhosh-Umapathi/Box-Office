import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, FlatList , SafeAreaView, StatusBar} from 'react-native';

//GraphQL
import { trendingMovies } from '../graphQl/axios';
import { TRENDING_MOVIES } from '../graphQl/queries';








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
  
    const renderItem = ({ item }) => 
    {

      console.log("URL =>",item.node.images.backdrops[0].image)
      
      return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.node.title}</Text>
            <Text style={styles.title}>{new Date(item.node.releaseDate).toLocaleDateString()}</Text>
            <Image 
              source = {{uri: item.node.images.backdrops[0].image}}
              style = {{  width: 66,height: 58,}}
            />

        </View>
      );}
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.node.id.toString()}
          />
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: "blue",
    },
    item: 
    {
        display:'flex',
        alignSelf:'flex-end',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 250,
        height:550,
        borderRadius: 10,
        elevation: 15,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        
      
    },
    title: {
      fontSize: 32,
    },
  });

export default HomeScreen;