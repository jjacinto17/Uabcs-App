import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, } from 'react-native';
import { getData } from '../../../api';

const { width, height } = Dimensions.get('window');

export const SemesterScreen = ({ route }) => {

    //const { semester } = route.params;

    const [data, setData] = useState([])
    const loadInfo = async () => {
        const info = await getData()
        setData([info])
        console.log(typeof (data))
    }
    useEffect(() => {
        loadInfo()
    }, [])

    const Item = ({ profe, materia, cali }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{cali}</Text>
            <Text style={styles.title}>{materia}</Text>
            <Text style={styles.title}>{profe}</Text>
        </View>
    );

    const ContainerMat = ({ profe, materia, cali }) => {
        return (
            <View style={styles.subjectContainer}>

                <View style={styles.matter}>
                    <Text style={styles.title}>materia</Text>
                </View>
                <View style={styles.containerMatter2}>
                    <Text style={styles.subjectName}>{materia}</Text>
                    <Text>{`Calificacio:${cali}`}</Text>
                    <Text>{`Tipo de cursado: edede`}</Text>
                    <Text>{`Grupo y turno:dedede`}</Text>
                    <Text>{`Profesor: ${profe}`}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ContainerMat
                        materia={item.materia}
                        profe={item.profesor}
                        cali={item.calificacion}
                    >
                    </ContainerMat>
                )}
            >
            </FlatList>            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: height * 0.02,
        flex: 1,
        paddingHorizontal: width * 0.009,
        justifyContent: 'center',
        alignItems: 'center',

    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
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
});
export default SemesterScreen;
