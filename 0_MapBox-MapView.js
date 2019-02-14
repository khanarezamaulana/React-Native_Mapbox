import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

// Mapbox Access Token, get in Mapbox Account!
Mapbox.setAccessToken('pk.eyJ1Ijoia2hhbmFyZXphIiwiYSI6ImNqczQ4aGxrZjAyOGczeW1za2JyZ2pvbTAifQ.TTU6XqJQI9v-3GYk2rKiTw')

class App extends Component{
  render(){
    return(
      <View style={desain.peta}>
        <Mapbox.MapView
          styleURL = {Mapbox.StyleURL.Street}
          zoomLevel = {15}
          centerCoordinate = {[106.8222893, -6.2106448]}
          style = {desain.peta}
        >
        </Mapbox.MapView>
      </View>
    )
  }
}

// to create style in Mapbox
var desain = StyleSheet.create({
  peta: {flex: 1}
})

export default App;