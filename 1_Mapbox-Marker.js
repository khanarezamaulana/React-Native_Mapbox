import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1Ijoia2hhbmFyZXphIiwiYSI6ImNqczQ4aGxrZjAyOGczeW1za2JyZ2pvbTAifQ.TTU6XqJQI9v-3GYk2rKiTw')

class App extends Component{

  titikMarker(){
    return (
      <Mapbox.PointAnnotation
      key = 'titik'
      id = 'titik'
      coordinate = {[106.8222893, -6.2106448]}
      >
        <View style={desain.posisi}>
          <View style={desain.titik}/>
        </View>
      </Mapbox.PointAnnotation>
    )
  }

  render(){
    return(
      <View style={desain.peta}>
        <Mapbox.MapView
          styleURL = {Mapbox.StyleURL.Street}
          zoomLevel = {15}
          centerCoordinate = {[106.8222893, -6.2106448]}
          style = {desain.peta}
        >
        {this.titikMarker()}
        </Mapbox.MapView>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  peta: {flex: 1},
  posisi: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20
  },
  titik: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
    transform: [{ scale: 0.5 }]
  }
})

export default App;