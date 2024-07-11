import { TextContainerNotification } from "../components/textNotificationCont"
import { TextContainerInformation } from "../components/textInformationCont"
import { LegendView } from '../components/kardexLeyends';
import { Card } from '../components/kardexCard';
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { MapScreen } from "../components/mapComponent"
import { Image } from "react-native";

export function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <TextContainerNotification />
            <TextContainerNotification />
            <TextContainerNotification />
        </View>
    );
}

export function InfoScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <TextContainerInformation />
        </View>
    );
}

export function CalendarScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <Image
                source={require('../../../assets/logo_uabcs.png')}
                style={styles.logo}
                resizeMode="stretch"

            />
        </View>
    );
}
export function UniMapScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}></Text>
            <MapScreen />
        </View>
    );
}

export function KardexScreen() {
    return (
        <View style={styles.container}>
            <LegendView/>
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

