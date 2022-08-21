import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  SafeAreaView,
  Image,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'http://localhost:5000/',
    };
  }

  getPlanets = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        return this.setState({
          data: response.data.data,
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  componentDidMount() {
    this.getPlanets();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    <ListItem
      key={index}
      title={'Planet: ' + item.name}
      subtitle={'Distance from earth: ' + item.distance_from_earth}
      titleStyle={styles.title}
      containerStyle={styles.listContainer}
      bottomDivider
      chevron
      onPress={() =>
        this.props.navigation.navigate('Details', { planet_name: item.name })
      }
    />;
  };

  render() {
    const { data } = this.state;

    
    if (data.length === 0) {
      return (
        <View style={styles.text}>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.goBack()}
          />
           <Image
           style={styles.load}
            source={require('../assets/A-1/loading2.gif')}
           />
        </View>
      );
    }
  

    return (
      <View style={styles.container}>
        <SafeAreaView />

        <View style={styles.upperContainer}>
          <Text style={styles.hedderText}>Uniscope</Text>
        </View>

        <View style={styles.lowerContainer}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#edc988"
  },
  upperContainer:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center"
  },
  hedderText:{
    fontSize:30,
    fontWeight:"bold",
    color:"#132743"
  },
  lowerContainer:{
    flex:0.9
  },

  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    //backgroundColor: "white",

    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  load:{
    width: 500,
    height: 450,
    //tintColor:'purple'
  }
});
