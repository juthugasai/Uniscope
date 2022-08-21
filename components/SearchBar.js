import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";

const SearchBar = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text)=>props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center'
    },
    input:{
        width:'100%',
        height:'100%',
        paddingLeft:8,
        fontSize:16
    }
});