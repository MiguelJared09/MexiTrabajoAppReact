import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import { colores } from '../../theme/AppTheme';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackBusquedaTrabajos } from './StackBusquedaTrabajos';
import { StackMisServicios } from './StackMisServicios';
import { PublicarServicioScreen } from '../screens/PublicarServicioScreen';


export const TabsT = () => {
    return Platform.OS === 'ios'
        ? <BottomTabTIOS/>
        : <BottomTabTAndroid/>;
};

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabTAndroid = () => {
    return (
        // <TabIndroid.Navigator>
        //     <TabIndroid.Screen name="Home" component={PublicarVacantesScreen} />
        //     <TabIndroid.Screen name="Settings" component={PublicarVacantesScreen} />
        // </TabIndroid.Navigator>

        <TabAndroid.Navigator
            barStyle={{
                backgroundColor: colores.primary,
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch ( route.name ) {
                        case 'StackBusquedaTrabajos':
                            iconName = 'search-outline';
                            break;
                        case 'StackMisServicios':
                            iconName = 'file-tray-full-outline';
                        break;
                        case 'PublicarServicioScreen':
                            iconName = 'duplicate-outline';
                        break;
                    }
                    return <Icon name={ iconName }  size={24} color={color} />;
                },
                tabBarStyle:{
                    backgroundColor: 'white',
                },
            })}
        >
            <TabAndroid.Screen name="StackBusquedaTrabajos" options={{ title:'Trabajos' }} component={StackBusquedaTrabajos} />
            <TabAndroid.Screen name="StackMisServicios" options={{ title:'Mis Anuncios' }} component={StackMisServicios} />
            <TabAndroid.Screen name="PublicarServicioScreen" options={{ title:'Anunciar Servicio'}} component={PublicarServicioScreen} />
        </TabAndroid.Navigator>
    );
};


const TabIOS = createBottomTabNavigator();

const BottomTabTIOS = () => {
    return (
        <TabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch ( route.name ) {
                        case 'StackBusquedaTrabajos':
                            iconName = 'T1';
                        break;
                        case 'StackMisServicios':
                            iconName = 'T2';
                        break;
                        case 'PublicarServicioScreen':
                            iconName = 'St';
                        break;
                    }
                    return <Text style={{ color: color }}>{iconName}</Text>;
                },
            })}
        >
            <TabIOS.Screen name="StackBusquedaTrabajos" options={{ title:'Tab1'}} component={StackBusquedaTrabajos} />
            <TabIOS.Screen name="StackMisServicios" options={{ title:'Tab2'}} component={StackMisServicios} />
            <TabIOS.Screen name="PublicarServicioScreen" options={{ title:'Stack'}} component={PublicarServicioScreen} />
        </TabIOS.Navigator>
    );
};
