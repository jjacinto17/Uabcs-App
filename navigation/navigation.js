import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InfoScreen } from '../features/home/screens/home';
import { UniMapScreen } from '../features/home/screens/home';
import { NotificationsScreen } from '../features/home/screens/home';
import { KardexScreen } from '../features/home/screens/home';
import { CalendarScreen } from '../features/home/screens/home';

const Tab = createBottomTabNavigator();

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Notificaciones':
                            iconName = 'bell';
                            break;
                        case 'Informacion':
                            iconName = 'pencil';
                            break;
                        case 'Calendario':
                            iconName = 'calendar';
                            break;
                        case 'Mapa':
                            iconName = 'map-pin';
                            break;
                        case 'Kardex':
                            iconName = 'file-text-o';
                            break;
                        default:
                            iconName = 'circle';
                            break;
                    }

                    return <Icon name={iconName} color={color} size={30} />;
                },
                tabBarItemStyle: { height: 80, justifyContent: 'center' },
                tabBarIconStyle: { height: 60, width: 60 },
                tabBarStyle: { height: 80 },
            })}
        >
            <Tab.Screen
                name="Notificaciones"
                component={NotificationsScreen}
            />
            <Tab.Screen
                name="Informacion"
                component={InfoScreen}
            />
            <Tab.Screen
                name="Calendario"
                component={CalendarScreen}
            />
            <Tab.Screen
                name="Mapa"
                component={UniMapScreen}
            />
            <Tab.Screen
                name="Kardex"
                component={KardexScreen}
            />
        </Tab.Navigator>
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
