import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const LegendView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        <View style={styles.legend}>
          <Text style={styles.legendText}>Aprobadas</Text>
          <View style={[styles.circle, styles.approved]}>
            <Text style={styles.number}>15</Text>
          </View>
        </View>
        <View style={styles.legend}>
          <Text style={styles.legendText}>No Aprobadas</Text>
          <View style={[styles.circle, styles.notApproved]}>
            <Text style={styles.number}>5</Text>
          </View>
        </View>
        <View style={styles.legend}>
          <Text style={styles.legendText}>General</Text>
          <View style={[styles.circle, styles.general]}>
            <Text style={styles.number}>80.6</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp('2%'),
    width: '100%',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  legend: {
    alignItems: 'center',
  },
  legendText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  circle: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notApproved: {
    backgroundColor: '#FF0000',
  },
  general: {
    backgroundColor: '#100000',
  },
  approved: {
    backgroundColor: 'rgb(19,133,53)',
  },
  number: {
    color: '#FFFFFF',
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
});

export default LegendView;
