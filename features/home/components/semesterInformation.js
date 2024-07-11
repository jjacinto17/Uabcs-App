import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export const SemesterScreen = ({ route }) => {
    const navigation = useNavigation();
    const { subject } = route.params;

    const subjectsData = [
        {
            subjectName: 'Matemáticas',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo A',
            turn: 'Vespertino',
            professor: 'Juan Pérez'
        },
        {
            subjectName: 'Física',
            period: '2020/II',
            type: 'Extraordinario',
            group: 'Grupo A',
            turn: 'Vespertino',
            professor: 'María García'
        },
        {
            subjectName: 'Programación',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo A',
            turn: 'Vespertino',
            professor: 'Luis Martínez'
        },
        {
            subjectName: 'Inglés',
            period: '2020/II',
            type: 'Recursamiento',
            group: 'Grupo A',
            turn: 'Vespertino',
            professor: 'Ana Ramírez'
        },
        {
            subjectName: 'Historia',
            period: '2020/II',
            type: 'Ordinario Normal',
            group: 'Grupo A',
            turn: 'Vespertino',
            profesor: 'Pedro Rodríguez'
        }
    ];

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="white" />
            </TouchableOpacity>
                    <Text style={styles.headerTitle}>{subject}</Text>
                </View>
                {subjectsData.map((subject, index) => (
                    <View key={index} style={styles.subjectContainer}>
                        <View style={styles.matter}>
                            <Text style={styles.title}>{subject.subjectName}</Text>
                        </View>
                        <View style={styles.containerMatter2}>
                            <Text>{`Período: ${subject.period}`}</Text>
                            <Text>{`Tipo de cursado: ${subject.type}`}</Text>
                            <Text>{`Grupo: ${subject.group}`}</Text>
                            <Text>{`Turno: ${subject.turn}`}</Text>
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
        flex: 1,
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0C1A61',
        width: '100%',
        marginBottom: height * 0.02,
        justifyContent: 'center',
        alignItems: 'left',
        paddingLeft: width * 0.15,
        paddingVertical: width * 0.9,
        paddingTop: height * 0.03,
        paddingBottom: height * 0.01,
    },
    headerTitle: {
        color: '#fff',
        fontSize: width * 0.06,
        fontWeight: 'bold',
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: height * 0.01,
    },
    title: {
        color: '#fff',
        marginHorizontal: width * 0.04,
        fontSize: width * 0.05,
        fontWeight: 'bold',
    },
    subjectName: {
        fontWeight: 'bold',
        fontSize: width * 0.04,
        marginBottom: height * 0.001,
    },
    scrollView: {
        flex: 1,
        width: "100%",
    },
    backButton: {
        position: 'absolute',
        top: height * 0.032,
        left: width * 0.05,
        zIndex: 1,
    },
});

export default SemesterScreen;
