import React, { useRef } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView from "react-native-maps";

export const MapScreen = () => {
  const mapRef = useRef(null);

  // Coordenadas de la ubicación deseada
  const initialRegion = {
    latitude: 24.101303102862094,
    longitude: -110.31479359672325,
    latitudeDelta: 0.01, // Controla el zoom inicial (menor valor = más zoom)
    longitudeDelta: 0.01,
  };

  // Límites del área permitida (ejemplo)
  const minLatitude = initialRegion.latitude - 0.01;
  const maxLatitude = initialRegion.latitude + 0.01;
  const minLongitude = initialRegion.longitude - 0.01;
  const maxLongitude = initialRegion.longitude + 0.01;

  const handleRegionChange = (newRegion) => {
    if (
      newRegion.latitude < minLatitude ||
      newRegion.latitude > maxLatitude ||
      newRegion.longitude < minLongitude ||
      newRegion.longitude > maxLongitude
    ) {
      // Si el mapa se mueve fuera de los límites permitidos, ajustamos de vuelta
      mapRef.current.animateToRegion(initialRegion, 1000);
      Alert.alert(
        "Alerta",
        "No puedes mover el mapa fuera de esta área."
      );
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}
        scrollEnabled={true} // Habilita el scroll del mapa
        onRegionChangeComplete={handleRegionChange} // Maneja el cambio de región
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;