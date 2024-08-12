import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#0C1A61',
        width: '100%',
        marginBottom: hp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('3%'),
    },
    headerTitle: {
        color: '#fff',
        fontSize: wp('6%'),
        fontWeight: 'bold',
    },
    subjectContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: hp('2%'),
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
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('4%'),
    },
    matter: {
        backgroundColor: '#2139B5',
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: hp('1%'),
    },
    title: {
        color: '#fff',
        paddingHorizontal: wp('4%'),
        fontSize: wp('5%'),
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
        width: "100%",
    },
    backButton: {
        position: 'absolute',
        top: hp('3.2%'),
        left: wp('5%'),
        zIndex: 1,
    },
});

export default SemesterScreen;
