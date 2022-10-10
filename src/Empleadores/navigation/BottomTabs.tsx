import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { PublicarVacantesScreen } from '../screens/PublicarVacantesScreen';
import { StackBusquedaServicios } from './StackBusquedaServicios';
import { StackMisVacantes } from './StackMisVacantes';
import { Platform, Text } from 'react-native';
import { colores } from '../../theme/AppTheme';

import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <BottomTabsIOS/>
        : <BottomTabsAndroid/>;
};

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabsAndroid = () => {
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
                        case 'StackBusquedaServicios':
                            iconName = 'search-outline';
                            break;
                        case 'StackMisVacantes':
                            iconName = 'file-tray-full-outline';
                        break;
                        case 'PublicarVacantesScreen':
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
            <TabAndroid.Screen name="StackBusquedaServicios" options={{ title:'Servicios' }} component={StackBusquedaServicios} />
            <TabAndroid.Screen name="StackMisVacantes" options={{ title:'Mis Anuncios' }} component={StackMisVacantes} />
            <TabAndroid.Screen name="PublicarVacantesScreen" options={{ title:'Anunciar Vacante'}} component={PublicarVacantesScreen} />
        </TabAndroid.Navigator>
    );
};


const TabIOS = createBottomTabNavigator();

const BottomTabsIOS = () => {
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
                        case 'StackBusquedaServicios':
                            iconName = 'T1';
                        break;
                        case 'StackMisVacantes':
                            iconName = 'T2';
                        break;
                        case 'PublicarVacantesScreen':
                            iconName = 'St';
                        break;
                    }
                    return <Text style={{ color: color }}>{iconName}</Text>;
                },
            })}
        >
            <TabIOS.Screen name="StackBusquedaServicios" options={{ title:'Tab1'}} component={StackBusquedaServicios} />
            <TabIOS.Screen name="StackMisVacantes" options={{ title:'Tab2'}} component={StackMisVacantes} />
            <TabIOS.Screen name="PublicarVacantesScreen" options={{ title:'Stack'}} component={PublicarVacantesScreen} />
        </TabIOS.Navigator>
    );
};
