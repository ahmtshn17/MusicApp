import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  FlatList
} from 'react-native';
import ProductCard from './Components/ProductCard/Card';
import data from './music-data.json'
import SearcBar from './Components/SearchBar';

function App(){
const [list , setList] = useState(data)

const renderMusic = ({item}) =>  <ProductCard Product={item}/>  

const HandleSearch = text => {
  const filteredList = data.filter(song => {
    const searchedText = text.toLowerCase();
    const currentText = song.title.toLowerCase();

    return currentText.indexOf(searchedText) > -1 ;
  });

  setList(filteredList);
};

  return (
    <SafeAreaView style={styles.container}>
      <SearcBar SearchValue={HandleSearch}/>
      <FlatList data={list} keyExtractor={item => item.id} renderItem={renderMusic} />


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex:1
  },
 
})

export default App;
