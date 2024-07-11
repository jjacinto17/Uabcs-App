import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SemesterScreen = ({ route }) => {
    const { semester } = route.params;

    const subjectsData = [
        {
            subjectName: 'Matemáticas',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo A',
            professor: 'Juan Pérez'
        },
        {
            subjectName: 'Física',
            period: '2020/II',
            type: 'Extraordinario',
            group: 'Grupo B',
            professor: 'María García'
        },
        {
            subjectName: 'Programación',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo C',
            professor: 'Luis Martínez'
        },
        {
            subjectName: 'Inglés',
            period: '2020/II',
            type: 'Recursamiento',
            group: 'Grupo D',
            professor: 'Ana Ramírez'
        },
        {
            subjectName: 'Historia',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo E',
            professor: 'Pedro Rodríguez'
        }
    ];

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {subjectsData.map((subject, index) => (
                    <View key={index} style={styles.subjectContainer}>
                        <View style={styles.matter}>
                            <Text style={styles.title}>Materia</Text>
                        </View>
                        <View style={styles.containerMatter2}>
                        <Text style={styles.subjectName}>{subject.subjectName}</Text>
                        <Text>{`Período: ${subject.period}`}</Text>
                        <Text>{`Tipo de cursado: ${subject.type}`}</Text>
                        <Text>{`Grupo y turno: ${subject.group}`}</Text>
                        <Text>{`Profesor: ${subject.professor}`}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: height * 0.02,
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingHorizontal: width * 0.009,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subjectContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: height * 0.02,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    containerMatter2: {
        paddingVertical: width * 0.02,
        marginHorizontal: width * 0.04,
    },
    matter: {
        backgroundColor: '#2139B5',
        width: '100%',
        borderRadius: 10,
        
    },
    title: {
        color: '#fff',
        marginHorizontal: width * 0.04,
        fontSize: width * 0.050,
        fontWeight: 'bold',
        marginBottom: height * 0.01,
    },
    subjectName: {

        fontWeight: 'bold',
        fontSize: width * 0.040,
        marginBottom: height * 0.001,
    },
    scrollView: {
        flex: 1,
        width: "100%",
    },
});

export default SemesterScreen;
