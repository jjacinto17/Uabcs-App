import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LegendView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        <View style={styles.legend}>
          <Text style={styles.legendText}>No Aprobadas</Text>
          <View style={[styles.circle, styles.notApproved]}>
            <Text style={styles.number}>5</Text>
          </View>
        </View>
        <View style={styles.legend}>
          <Text style={styles.legendText}>General</Text>
          <View style={[styles.circle, styles.general]}>
            <Text style={styles.number}>10</Text>
          </View>
        </View>
        <View style={styles.legend}>
          <Text style={styles.legendText}>Aprobadas</Text>
          <View style={[styles.circle, styles.approved]}>
            <Text style={styles.number}>15</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:"1%",
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderStyle:'solid',
    borderColor:'#f0f0f0',
    
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderColor:"#0C1A61",
    
  },
  legend: {
    alignItems: 'center',
  },
  legendText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    backgroundColor: '#00F000', 
  },
  number: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


