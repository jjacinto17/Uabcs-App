import React from "react";
import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

export const CalendarScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <Image
        source={require('../../../assets/calendario.png')}
        style={styles.image}
        resizeMode="contain"
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: width * 10,
    height: width * 2.45,
    borderRadius: 10,
  },
  scrollView: {
    width: "100%",
  },
});

export default CalendarScreen;
