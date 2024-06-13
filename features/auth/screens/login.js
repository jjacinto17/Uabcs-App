import React from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native';

export function LoginScreen({ navigation }) {
    return (
        <View style={styles.formContainer}>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../../assets/logo_uabcs.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.text}>Identificador:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='alu_20'
                />

                <Text style={styles.text}>Contraseña:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder='Ingrese su contraseña'
                />

                <Text
                    style={styles.forgotPassword}
                    onPress={() => {

                    }}
                >
                    Has olvidado la contraseña?
                </Text>
            </View>

            <View style={styles.sendBtn}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('HomeScreen');
                    }}
                >
                    <Text style={styles.btnText}>Iniciar sesión</Text>
                </Pressable>
            </View>

            <Text style={styles.noAccountText}>
                No tienes una cuenta?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C1A61',
        paddingHorizontal: 20,
    },
    imageContainer: {
        marginBottom: 30,
    },
    logo: {
        width: 300,
        height: 300,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        height: 50,
        width: '80%',
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        backgroundColor: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    forgotPassword: {
        fontSize: 16,
        color: '#94D8F6',
        marginBottom: 40,
        textDecorationLine: 'underline',
    },
    sendBtn: {
        width: '60%',
        height: 70,
        backgroundColor: '#046DC9',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
    },
    noAccountText: {
        fontSize: 20,
        color: '#94D8F6',
        marginTop: 20,
    }
});
