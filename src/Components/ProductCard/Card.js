import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
} from 'react-native';
import styles from './Card.style'

function ProductCard(props){
    return(

        <View style={styles.container}>
            <Image source={{uri: props.Product.imageUrl}} style={styles.img}/>
            <View style={styles.cardBody}>
                <Text style= {styles.title}>{props.Product.title}</Text>
                <View style={styles.cardBodyFooter}>
                    <View style={styles.cardDescriptions}>
                        <Text style={styles.artist}>{props.Product.artist}</Text>
                        <Text style={styles.year}>{props.Product.year}</Text>
                    </View>
                    {(props.Product.isSoldOut && <Text style={styles.stockStatus}>TÜKENDİ</Text>)}             
                </View>
            </View>
        </View>

        
    );
}

export default ProductCard