import { TextContainerNotification } from "../components/textNotificationCont"
import { TextContainerInformation } from "../components/textInformationCont"
import  CalendarComponent  from "../components/calendarComponent"
import { LegendView } from '../components/kardexLeyends';
import { Card } from '../components/kardexCard';
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { MapScreen } from "../components/mapComponent"

export function NotificationsScreen() {
    return (
        <View style={styles.container}>
            <TextContainerNotification />
            <TextContainerNotification />
            <TextContainerNotification />
        </View>
    );
}

export function InfoScreen() {
    return (
        <View style={styles.container}>
            <TextContainerInformation />
        </View>
    );
}

export function CalendarScreen() {
    return (
        <View style={styles.container}>
            <CalendarComponent />
        </View>
    );
}
export function UniMapScreen() {
    return (
        <View style={styles.container}>
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
        backgroundColor: '#fff',

    },
});

