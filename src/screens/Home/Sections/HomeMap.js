import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Image} from 'react-native';
import {cars} from '../../../data/cars';


const Map = (props) => {

  
  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../../assets/images/top-Comfort.png');
    }
    return require('../../../assets/images/top-UberXL.png');
  };

  return (
    <View style={{height: props.height ? props.height : '35%', width: '100%'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: props.location.latitude,
          longitude: props.location.longitude,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}>
        {cars.map((car,index) => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}>
            <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain',
                transform: [
                  {
                    rotate: `${car.heading}deg`,
                  },
                ],
              }}
              source={getImage(car.type)}
            />
          </Marker>
          
        ))}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
