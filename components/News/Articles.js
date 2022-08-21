import React from 'react';
import PropTypes from 'prop-types';

import { View, Linking, TouchableNativeFeedback,StyleSheet } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

import moment from 'moment';



const Articles = props => {
  const { article } = props;
  const { title, description, published, enclosures, links } = article;
  const {
    noteStyle,
    featuredTitleStyle,
    cardStyle,
    descriptionStyle,
    dividerStyle,
    timeStyle,
  } = styles;
  const time = moment(published || moment.now()).fromNow();

  return (
    <TouchableNativeFeedback useForeground onPress={() => Linking.openURL(links[0].url)}>
      <Card
        style={cardStyle}
        featuredTitle={title}
        featuredTitleStyle={featuredTitleStyle}
        image={{
          uri: enclosures[0].url,
        }}
      >
        <Text style={descriptionStyle}>{description || 'Read More...'}</Text>
        <Divider style={dividerStyle} />
        <View style={timeStyle}>
          <Text style={noteStyle}>{time}</Text>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
};

Articles.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    cardStyle: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        
      },
      noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10,
        borderRadius:70
      },
      featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3,
        borderBottomEndRadius:10,
        
      },
      descriptionStyle: {
        marginBottom: 10,
      },
      dividerStyle: {
        backgroundColor: '#dfe6e9',
        
      },
      textStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})
export default Articles;
