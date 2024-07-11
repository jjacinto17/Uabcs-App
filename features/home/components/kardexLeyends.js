import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
    backgroundColor: '#f0f0f0',
    paddingVertical: height * 0.02,
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
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },
  circle: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
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
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});

export default LegendView;
