import { StyleSheet } from 'react-native';

export default estilo = StyleSheet.create({
    container: {
        flex: 1,
      },
    areaCadastro: {
        flex:3,
        backgroundColor: '#00173499',
        margin: 5,
        padding: 15,
        borderRadius: 10,  
    },
    fundo: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    form: {
        marginTop:10,
        flex: 1,
        flexDirection: 'row'
    },
    formAvatar: {
        width:110,
        height:110,
        backgroundColor:'#CCCCCC99',
        marginTop:15,
        marginBottom:5,
        borderRadius: 10,

    },
    formInfo: {
        flex:1,
        flexDirection:'column',
        marginTop:20,
        marginLeft:10,
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#000',
        marginBottom:10,
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
    },
    bt:{
        flex:1,
    },
    listaArea:{
        flex:5,
        backgroundColor:"#cdd4e2",
        marginHorizontal:5,
        borderRadius: 10,
    },
    itemArea:{     
        height:100,
        flex:1,
        flexDirection:'row',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop:10,
    },
    itemAvatar:{
        width:60,
        height:60,
        margin:10,
        borderRadius:10,
    },
    itemInfo:{
        flex:1,
        flexDirection:'column',
        marginTop:10,

    }
});
