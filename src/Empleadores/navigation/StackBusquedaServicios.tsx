import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BusquedaTrabajadoresScreen } from '../screens/BusquedaTrabajadoresScreen';
import { IndvServicioScreen } from '../screens/IndvServicioScreen';

const Stack = createStackNavigator();

export const StackBusquedaServicios = () => {
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
            <Stack.Screen name="BusquedaTrabajadoresScreen" options={{title: "Búsqueda Servicios"}} component={ BusquedaTrabajadoresScreen } />
            <Stack.Screen name="IndvServicioScreen" options={{title: "Servicio"}} component={IndvServicioScreen} />
        </Stack.Navigator>
    );
};
