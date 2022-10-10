import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackBusquedaServicios } from './StackBusquedaServicios';
import { PublicarVacantesScreen } from '../screens/PublicarVacantesScreen';

const Drawer = createDrawerNavigator();

export const MenuLateralPrueba = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Búsqueda de Servicios" component={StackBusquedaServicios} />
            <Drawer.Screen name="Publicar Vacante" component={PublicarVacantesScreen} />
        </Drawer.Navigator>
    );
};
