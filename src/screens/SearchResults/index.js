import React, {useState} from 'react';
import {View, Dimensions, Alert, ScrollView} from 'react-native';
// import RouteMap from "../../components/RouteMap";
import UberTypes from './Sections/UberTypes';
import HomeMap from '../Home/Sections/HomeMap';
import {useRoute, useNavigation} from '@react-navigation/native';
import RouteMap from './Sections/RouteMap';

const SearchResults = (props) => {
  const typeState = useState(null);

  const route = useRoute();

  const {originPlace, destinationPlace} = route.params;
  const onSubmit = async () => {};

  return (
    <View style={{display: 'flex', justifyContent: 'space-between',flex:1}}>
      <View style={{height:"40%"}}>
        <RouteMap  origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{height: "60%"}}>
      <ScrollView>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </ScrollView>
      </View>
    </View>
  );
};

export default SearchResults;
