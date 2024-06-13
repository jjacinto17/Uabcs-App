import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextContainer } from "../components/textNotificationCont"
import { TabBarItem } from 'react-native-tab-view';
import { LegendView } from '../components/kardexLeyends';
import { Card } from '../components/kardexCard';
import { MapScreen } from '../components/mapComponent';

const Tab = createBottomTabNavigator();

function Notifications() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notificaciones</Text>
            <TextContainer />
            <TextContainer />
            <TextContainer />
        </View>
    );
}

function Info() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>infos</Text>
        </View>
    );
}

function Calendar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>calendario</Text>
        </View>
    );
}
function UniMap() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>mapas</Text>
            <MapScreen />
        </View>
    );
}

function KardexScreen() {
    return (
        <View style={styles.container}>
            <LegendView />
            <Card />

        </View>
    );
}




export function HomeScreen({ navigation }) {
    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={
                    {
                        tabBarItemStyle: { width: 40, height: 74 },
                        tabBarIconStyle: { width: 60, height: 60 }
                    }
                }>
                <Tab.Screen
                    name="Notificaciones"
                    component={Notifications}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="bell" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Informacion"
                    component={Info}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="pencil" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Calendario"
                    component={Calendar}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="calendar" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Mapa"
                    component={UniMap}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="map-pin" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="KardexScreen"
                    component={KardexScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="file-text-o" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
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
