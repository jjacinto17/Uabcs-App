import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';

const GradeCard = ({ semester, subject, teacher, grade }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => setModalVisible(false);

    return (
        <>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
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
            </Modal>
        </>
    );
};

const getGradeColor = (grade) => {
    const numericGrade = parseFloat(grade);
    if (numericGrade >= 9.0) {
        return '#2ecc71';
    } else if (numericGrade >= 7.0) {
        return '#f39c12';
    } else {
        return '#e74c3c';
    }
};

export const Card = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <GradeCard semester="1" subject="Matemáticas" teacher="Prof. Pérez" grade="8.5" />
                <GradeCard semester="2" subject="Física" teacher="Prof. López" grade="9.0" />
                <GradeCard semester="3" subject="Química" teacher="Prof. Sánchez" grade="7.5" />
                <GradeCard semester="4" subject="Biología" teacher="Prof. Gómez" grade="8.0" />
                <GradeCard semester="5" subject="Historia" teacher="Prof. Rodríguez" grade="9.5" />
                <GradeCard semester="6" subject="Geografía" teacher="Prof. Martínez" grade="7.0" />
                <GradeCard semester="7" subject="Literatura" teacher="Prof. García" grade="8.8" />
                <GradeCard semester="8" subject="Arte" teacher="Prof. Torres" grade="9.2" />
                <GradeCard semester="9" subject="Música" teacher="Prof. Castro" grade="8.7" />
                <GradeCard semester="10" subject="Educación Física" teacher="Prof. Ramírez" grade="7.9" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 10,
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgb(222,222,222)',
        borderRadius: 21,
        padding: 15,
        marginBottom: 10,
    },
    leftContainer: {
        width: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(42,128,207)',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    semester: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    centerContainer: {
        width: '60%',
        paddingLeft: 15,
    },
    subject: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(23,26,32)',
    },
    teacher: {
        fontSize: 16,
        color: 'rgb(23,26,32)',
    },
    rightContainer: {
        width: '20%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    gradeCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    },
    grade: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContent: {
        flex: 1,
        paddingRight: 20,
    },
    rightContent: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',

    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    gradeCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0C1A61',
    },
    closeButton: {
        alignSelf: 'center',
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#0C1A61',
        borderRadius: 10,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
