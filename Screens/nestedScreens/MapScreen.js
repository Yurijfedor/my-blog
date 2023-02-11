import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, {Marker} from 'react-native-maps'
const Map = (route) => {

  return (
    <View style={styles.container}>
      <MapView
        style={{ width: '100%', height: '100%', flex: 1 }}
        initialRegion={{
          latitude: route.route.params.latitude,
          longitude: route.route.params.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: route.route.params.latitude,
            longitude: route.route.params.longitude,
          }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Map;