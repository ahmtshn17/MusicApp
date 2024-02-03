import {StyleSheet,Dimensions} from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        flexDirection:'row',
        padding:5,
        borderStyle:'solid',
        borderColor:'#B4B4B8',
        borderBottomWidth:2
    },
    img:{
        width:Dimensions.get('window').width / 4,
        height:Dimensions.get('window').height / 7,
        borderRadius:50
    },
    title:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    cardBody: {
        padding:5,
        paddingLeft:25,
        flex:1
    },
    cardBodyFooter:{
        flexDirection:'row',
        padding:20,
        paddingRight:0,
        paddingLeft:0,
        flex:1,
    },
    cardDescriptions:{
        flexDirection:'row',
        flex:1,
    },
    artist:{
        color:'black',
        fontWeight:'bold'

    },
    year:{
        color:'gray',
        marginLeft:8,
        fontSize:10,
        marginTop:3,
    },
    stockStatus:{
        color:'#D24545',
        alignSelf:'flex-end',
        marginLeft:25,
        borderStyle:'solid',
        borderColor:'#D24545',
        borderWidth:2,
        padding:5,
        fontSize:10,
        borderRadius:10
    }
})