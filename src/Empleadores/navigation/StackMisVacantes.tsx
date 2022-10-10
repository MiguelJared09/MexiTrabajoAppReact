import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ListaMisVacantesScreen } from '../screens/ListaMisVacantesScreen';
import { IndvMiVacanteScreen } from '../screens/IndvMiVacanteScreen';
import { ListaPostlVacanteScreen } from '../screens/ListaPostlVacanteScreen';
import { IndPostulacionVacanteScreen } from '../screens/IndPostulacionVacanteScreen';

const Stack = createStackNavigator();

export const StackMisVacantes = () => {
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
            <Stack.Screen name="ListaMisVacantesScreen" options={{title: " Mis Vacantes"}} component={ ListaMisVacantesScreen } />
            <Stack.Screen name="IndvMiVacanteScreen" options={{title: " Mi Vacante"}} component={IndvMiVacanteScreen} />
            <Stack.Screen name="ListaPostlVacanteScreen" options={{title: " Postulaciones"}} component={ListaPostlVacanteScreen} />
            <Stack.Screen name="IndPostulacionVacanteScreen" options={{title: " Postulacion"}} component={IndPostulacionVacanteScreen} />
        </Stack.Navigator>
    );
};
