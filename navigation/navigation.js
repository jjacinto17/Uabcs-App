import * as React from 'react';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InfoScreen, UniMapScreen, NotificationsScreen, KardexScreen, CalendarScreen } from '../features/home/screens/home';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');

const formatTitle = (routeName) => {
};

export function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Notificacion':
                            iconName = 'bell';
                            break;
                        case 'Informacion':
                            iconName = 'pencil';
                            break;
                        case 'Calendario':
                            iconName = 'calendar';
                            break;
                        case 'Mapa':
                            iconName = 'map-marker';
                            break;
                        case 'Kardex':
                            iconName = 'file-text-o';
                            break;
                    }

                    return <Icon name={iconName} color={color} size={width * 0.065} />; 
                },
                
                headerTitleContainerStyle: {
                    justifyContent: 'center',
                },
                tabBarItemStyle: { 
                    height: height * 0.1,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarIconStyle: { 
                    height: height * 0.075,
                    width: height * 0.075,
                },
                tabBarStyle: { 
                    height: height * 0.1,
                    paddingBottom: height * 0.01,
                },
                headerStyle: {
                    backgroundColor: '#0C1A61',
                },
                headerTintColor: "#fff",
                headerTitle: formatTitle(route.name),
            })}
        >
            <Tab.Screen
                name="Notificacion"
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

