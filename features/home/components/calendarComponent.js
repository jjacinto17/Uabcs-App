import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require('../../../assets/calendario.png')}
          style={styles.image}
          resizeMode="cover" 
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  image: {
    width: wp('100%'),
    height: hp('100%'),
  },
  scrollView: {
    width: "100%",
  },
});

export default CalendarScreen;
