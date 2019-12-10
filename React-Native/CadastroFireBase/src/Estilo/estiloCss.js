import { StyleSheet } from 'react-native';

export default estilo = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    areaCadastro: {
        backgroundColor: '#00173499',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    fundo: {
        width: '100%',
        height: '100%',
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    form: {
        flex: 1,
        flexDirection: 'row'
    },
    formAvatar: {
        width:150,
        height:150,
        backgroundColor:'#CCCCCC99',
        marginTop:10,
        borderRadius: 10,

    },
    formInfo: {
        flex:1,
        flexDirection:'column'
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#000',
        marginTop:10,
        marginBottom:10,
        backgroundColor:'#FFFFFF',
        borderRadius: 10,
    },
    bt:{
        marginHorizontal:5,
                
    },
    listaArea:{
        flex:1,
        backgroundColor:"#EEE",
        margin:10,
        borderRadius: 10,
    },
    itemArea:{

        
        height:100,
        flex:1,
        flexDirection:'row'
    },
    itemAvatar:{
        width:80,
        height:80,
        margin:10,

    },
    itemInfo:{
        flex:1,
        flexDirection:'column'

    }

});
