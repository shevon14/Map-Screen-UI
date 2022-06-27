import React from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App (){

  const markers = [
    {
      latitude: 51.309865,
      longitude: -0.002099,
      }, 
      {
        latitude: 52.709865,
        longitude: -0.048092,
      },
      {
        latitude: 51.809865,
        longitude: -0.948092,
      },
      {
        latitude: 53.809865,
        longitude: -0.948092,
      }, 
  ];

  const CustomMarker = () => {
    return(
      <View>
        <Icon name="location-history" size={50} color='#E74c3c' />
        <View style={{
          width: 30,
          height: 30,
          borderRadius: 50,
          backgroundColor: '#ECF0F1',
          position: 'absolute',
          left: 10,
          top: 8,
        }}>
          <Icon style={{
            textAlign: 'center',
            top: 5,
          }} name="local-gas-station" size={20} color='#E74c3c' />
        </View>
      </View>
    )
  }

  return(
    <View style={{
      flex: 1,
    }}>
      <MapView style={{
        flex: 1,
      }}
        showsUserLocation={true}
        initialRegion={{
          latitude: 51.309865,
          longitude: -0.002099,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
        zoomEnabled={true}
      >
        {
          markers.map((val) => (
            <Marker coordinate={{
              latitude: val.latitude,
              longitude: val.longitude,
            }}>
              <CustomMarker />
            </Marker>
          ))
        }
      </MapView>
    </View>
  )

}