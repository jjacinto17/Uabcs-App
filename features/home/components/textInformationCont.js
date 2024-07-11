import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const TextContainerInformation = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/logo_uabcs.png")}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.date}>12/06/2024</Text>
                <Text style={styles.title}>Texto Informacion </Text>
                <Text style={styles.description}>
                    Esta es una descripción más detallada. Este es un texto adicional para demostrar cómo se comporta cuando hay mucho texto.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#0C1A61',
        borderRadius: 21,
        padding: 10,
        marginBottom: height * 0.03,
        alignItems: 'center',
    },
    image: {
        width: width * 0.20,
        height: width * 0.20,
        borderRadius: (width * 0.20) / 2,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10,
    },
    date: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: width * 0.03,
        color: '#eeeeee',
    },
    title: {
        fontSize: width * 0.048,
        fontWeight: 'bold',
        color: '#eeeeee',
        marginTop: height * 0.025,
    },
    description: {
        fontSize: width * 0.035,
        color: '#cccccc',
        marginTop: 5,
        flexShrink: 1,
    },
});

export default TextContainerInformation;

