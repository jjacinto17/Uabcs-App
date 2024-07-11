import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const GradeCard = ({ semester, subject, teacher, grade }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); 

  const handleSemesterPress = () => {
    navigation.navigate("SemesterScreen", { subject });
  };

  /*const closeModal = () => setModalVisible(false);

    <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <View style={styles.leftContent}>
                            <Text style={styles.modalTitle}>{subject}</Text>
                            <Text style={styles.modalDescription}>Descripción de la materia...</Text>
                        </View>
                        <View style={styles.rightContent}>
                            <View style={[styles.gradeCircle, { backgroundColor: getGradeColor(grade) }]}>
                                <Text style={styles.gradeText}>{grade}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>*/

  return (
    <>
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
            <View
              style={[
                styles.gradeCircle,
                { backgroundColor: getGradeColor(grade) },
              ]}
            >
              <Text style={styles.grade}>{grade}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const getGradeColor = (grade) => {
  const numericGrade = parseFloat(grade);
  if (numericGrade === 100) {
    return "#27ae60"; // Verde
  } else if (numericGrade >= 90.0) {
    return "#2ecc71"; // Verde claro
  } else if (numericGrade >= 70.0) {
    return "#f1c40f"; // Amarillo
  } else if (numericGrade >= 60.0) {
    return "#e67e22"; // Naranja
  } else {
    return "#e74c3c"; // Rojo
  }
};

export const Card = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <GradeCard semester="1" subject="Primer Semestre" grade="80.5" />
        <GradeCard semester="2" subject="Segundo Semestre" grade="100" />
        <GradeCard semester="3" subject="Tercer Semestre" grade="50.5" />
        <GradeCard semester="4" subject="Cuarto Semestre" grade="80.0" />
        <GradeCard semester="5" subject="Quinto Semestre" grade="90.5" />
        <GradeCard semester="6" subject="Sexto Semestre" grade="70.0" />
        <GradeCard semester="7" subject="Septimo Semestre" grade="80.8" />
        <GradeCard semester="8" subject="Octavo Semestre" grade="60.1" />
        <GradeCard semester="9" subject="Noveno Semestre" grade="80.7" />
        <GradeCard semester="10" subject="Decimo Semestre" grade="70.9" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: width * 0.009,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgb(222,222,222)",
    borderRadius: 21,
    padding: width * 0.04,
    marginBottom: height * 0.015,
  },
  leftContainer: {
    marginHorizontal: width * 0.04,
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(42,128,207)",
    borderRadius: 10,
    padding: width * 0.025,
    marginRight: width * 0.025,
  },
  semester: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#fff",
  },
  centerContainer: {
    width: "55%",
    paddingLeft: width * 0.04,
  },
  subject: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    textAlign: "left",
    color: "rgb(23,26,32)",
  },
  teacher: {
    fontSize: width * 0.04,
    color: "rgb(23,26,32)",
  },
  rightContainer: {
    width: "20%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  gradeCircle: {
    width: width * 0.125,
    height: width * 0.125,
    borderRadius: (width * 0.125) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  grade: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#fff",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: height * 0.03,
    borderRadius: 10,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContent: {
    flex: 1,
    paddingRight: width * 0.05,
  },
  rightContent: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.01,
  },
  modalDescription: {
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    color: "#333",
  },
  gradeText: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  closeButton: {
    alignSelf: "center",
    marginTop: height * 0.02,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    backgroundColor: "#0C1A61",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
});
