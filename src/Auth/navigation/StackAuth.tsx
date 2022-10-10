import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../screens/SplashScreen';
import { InicioSesionScreen } from '../screens/InicioSesionScreen';
import { PreRegistroScreen } from '../screens/PreRegistroScreen';
import { RegistroEmpleadoresScreen } from '../screens/RegistroEmpleadoresScreen';
import { RegistroTrabajadoresScreen } from '../screens/RegistroTrabajadoresScreen';
import { RecContrasena } from '../screens/RecContrasena';

const Stack = createStackNavigator();

export const StackAuth = () => {
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
            <Stack.Screen name="SplashScreen" options={{title: " Splash"}} component={ SplashScreen } />
            <Stack.Screen name="InicioSesionScreen" options={{title: " Login"}} component={InicioSesionScreen} />
            <Stack.Screen name="PreRegistroScreen" options={{title: " PreRegistro"}} component={PreRegistroScreen} />
            <Stack.Screen name="RegistroEmpleadoresScreen" options={{title: " Reg. Empleadores"}} component={RegistroEmpleadoresScreen} />
            <Stack.Screen name="RegistroTrabajadoresScreen" options={{title: " Reg. Trabajadores"}} component={RegistroTrabajadoresScreen} />
            <Stack.Screen name="RecContrasena" options={{title: " Rec. Contraseña"}} component={RecContrasena} />
        </Stack.Navigator>
    );
};
