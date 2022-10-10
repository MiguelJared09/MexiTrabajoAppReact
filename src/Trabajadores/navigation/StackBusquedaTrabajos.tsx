import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BusquedaVacantesScreen } from '../screens/BusquedaVacantesScreen';
import { IndvOfertaLaboralScreen } from '../screens/IndvOfertaLaboralScreen';

const Stack = createStackNavigator();

export const StackBusquedaTrabajos = () => {
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
            <Stack.Screen name="BusquedaVacantesScreen" options={{title: "Búsqueda Trabajos"}} component={ BusquedaVacantesScreen } />
            <Stack.Screen name="IndvOfertaLaboralScreen" options={{title: "Oferta Laboral"}} component={IndvOfertaLaboralScreen} />
        </Stack.Navigator>
    );
};