import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ListaMisServiciosScreen } from '../screens/ListaMisServiciosScreen';
import { IndvMiServicioScreen } from '../screens/IndvMiServicioScreen';
import { ListaSolMiServicioScreen } from '../screens/ListaSolMiServicioScreen';
import { IndvSolicitudServicioScreen } from '../screens/IndvSolicitudServicioScreen';

const Stack = createStackNavigator();

export const StackMisServicios = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            // headerShown: false,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
            cardStyle: {
                backgroundColor: 'white',
            },
        }}>
            <Stack.Screen name="ListaMisServiciosScreen" options={{title: " Mis Servicios"}} component={ ListaMisServiciosScreen } />
            <Stack.Screen name="IndvMiServicioScreen" options={{title: " Mi Servicio"}} component={IndvMiServicioScreen} />
            <Stack.Screen name="ListaSolMiServicioScreen" options={{title: " Solicitudes"}} component={ListaSolMiServicioScreen} />
            <Stack.Screen name="IndvSolicitudServicioScreen" options={{title: " Solicitud"}} component={IndvSolicitudServicioScreen} />
        </Stack.Navigator>
    );
};