import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const TextContainer = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/logo_uabcs.png")}
                style={styles.image}

            />
            <View style={styles.textContainer}>
                <Text style={styles.date}>12/06/2024</Text>
                <Text style={styles.title}>Texto Principal</Text>
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
        height: 150,
        backgroundColor: '#0C1A61',
        borderRadius: 21,
        padding: 10,
        marginBottom: '1%',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 10,
    },
    date: {
        position: 'absolute',
        top: 0,
        right: 0,
        fontSize: 12,
        color: '#eeee',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eeee',
    },
    description: {
        fontSize: 18,
        color: '#cccccc',
        flexShrink: 1,
    },
});

export default TextContainer;
