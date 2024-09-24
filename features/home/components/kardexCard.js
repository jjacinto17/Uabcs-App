import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GradeCard = ({ semester, subject, teacher, grade }) => {
  const navigation = useNavigation(); 

  const handleSemesterPress = () => {
    navigation.navigate("SemesterScreen", { subject });
  };

  return (
    <TouchableOpacity onPress={handleSemesterPress}>
      <View style={styles.card}>
        <View style={styles.leftContainer}>
          <Text style={styles.semester}>{semester}</Text>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.subject}>{subject}</Text>
          <Text style={styles.teacher}>{teacher}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={[styles.gradeCircle, { backgroundColor: getGradeColor(grade) }]}>
            <Text style={styles.grade}>{grade}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const getGradeColor = (grade) => {
  const numericGrade = parseFloat(grade);
  if (numericGrade === 100) {
    return "#27ae60"; 
  } else if (numericGrade >= 90.0) {
    return "#2ecc71"; 
  } else if (numericGrade >= 70.0) {
    return "#f1c40f"; 
  } else if (numericGrade >= 60.0) {
    return "#e67e22"; 
  } else {
    return "#e74c3c";
  }
};

export const Card = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <GradeCard semester="1" subject="Primer Semestre" grade="80.5" />
        <GradeCard semester="2" subject="Segundo Semestre" grade="100" />
        <GradeCard semester="3" subject="Tercer Semestre" grade="50.5" />
        <GradeCard semester="4" subject="Cuarto Semestre" grade="80.0" />
        <GradeCard semester="5" subject="Quinto Semestre" grade="90.5" />
        <GradeCard semester="6" subject="Sexto Semestre" grade="70.0" />
        <GradeCard semester="7" subject="Séptimo Semestre" grade="80.8" />
        <GradeCard semester="8" subject="Octavo Semestre" grade="60.1" />
        <GradeCard semester="9" subject="Noveno Semestre" grade="80.7" />
        <GradeCard semester="10" subject="Décimo Semestre" grade="70.9" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: wp('2%'),
  },
  scrollViewContent: {
    paddingBottom: hp('2%'),
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgb(222,222,222)",
    borderRadius: 21,
    padding: wp('4%'),
    marginBottom: hp('1.5%'),
  },
  leftContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(42,128,207)",
    borderRadius: 10,
    padding: wp('2.5%'),
    marginRight: wp('2.5%'),
  },
  semester: {
    fontSize: wp('5%'),
    fontWeight: "bold",
    color: "#fff",
  },
  centerContainer: {
    width: "55%",
    paddingLeft: wp('4%'),
  },
  subject: {
    fontSize: wp('4.5%'),
    fontWeight: "bold",
    textAlign: "left",
    color: "rgb(23,26,32)",
  },
  teacher: {
    fontSize: wp('4%'),
    color: "rgb(23,26,32)",
  },
  rightContainer: {
    width: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: wp('8%'),
  },
  gradeCircle: {
    width: wp('12.5%'),
    height: wp('12.5%'),
    borderRadius: wp('6.25%'),
    justifyContent: "center",
    alignItems: "center",
  },
  grade: {
    fontSize: wp('4.5%'),
    fontWeight: "bold",
    color: "#fff",
  },
  closeButton: {
    alignSelf: "center",
    marginTop: hp('2%'),
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    backgroundColor: "#0C1A61",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: wp('4.5%'),
    fontWeight: "bold",
  },
});

export default Card;
