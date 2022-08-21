import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import axios from 'axios';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url:
        'http://localhost:5000/planet?name=' +
        this.props.navigation.getParam('planet_name'),
      imgPath: '',
    };
  }

  setDetails = (planetDetails) => {
    const planetType = planetDetails.planet_type;
    var img = '';

    switch (planetType) {
      case 'Gas Giant':
        img = require('../assets/A-1/gas_giant.png');
        break;

      case 'Terrestrial':
        img = require('../assets/A-1/terrestrial.png');
        break;

      case 'Super Earth':
        img = require('../assets/A-1/super_earth.png');
        break;

      case 'Neptune-like':
        img = require('../assets/A-1/neptune_like.png');
        break;

      default:
        img = require('../assets/A-1/gas_giant.png');
    }

    this.setState({
      details: planetDetails,
      imgPath: img,
    });
  };

  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        this.setDetails(response.data.data);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  componentDidMount() {
    this.getDetails();
  }

  render() {
    const { details, imgPath } = this.state;

    if (details.specifications) {
      return (
        <View>
          <Card 
          title={details.name}
          image={imgPath}
          imageProps={{rezieMode: "contain", width:"160%"}}>
            <View>
              <Text style={styles.cardItem}>{"Distance from earth: " + details.distance_from_earth}</Text>
              <Text style={styles.cardItem}>{"Distance from sun: " + details.distance_from_their_sun}</Text>
              <Text style={styles.cardItem}>{"Gravity : " + details.gravity}</Text>
              <Text style={styles.cardItem}>{"Orbital Period: " + details.orbital_period}</Text>
              <Text style={styles.cardItem}>{"Orbital Speed: " + details.orbital_speed}</Text>
              <Text style={styles.cardItem}>{"Planet Mass: " + details.planet_mass}</Text>
              <Text style={styles.cardItem}>{"Planet Radius: " + details.planet_radius}</Text>
              <Text style={styles.cardItem}>{"Planet Type: " + details.planet_type}</Text>

            </View>
            <View>
              <Text>{details.specifications?"Specifications: ":""}</Text>
              {details.specifications.map((item,index)=>(
                <Text style={{marginLeft:50}}
                key={index.toString()}>{item}</Text>
              ))}
            </View>
          </Card>
        </View>
      );
    }

    return null
  }
}

const styles = StyleSheet.create({
cardItem:{

  marginBottom:10
}

})