import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InfoContactoCurrScreen } from '../screens/InfoContactoCurrScreen';
import { colores } from '../../theme/AppTheme';
import { InfoPersonalScreen } from '../screens/InfoPersonalScreen';
import { InfoDomicilioScreen } from '../screens/InfoDomicilioScreen';

const Tab = createMaterialTopTabNavigator();

export const PerfilComplementNav = () => {

    const {top:paddingTop} = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route}) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                },
                tabBarStyle: {
                    elevation: 0,
                },
                tabBarIcon: ({color}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Datos Personales':
                        iconName = 'person-circle-outline';
                        break;
                        case 'Domicilio':
                        iconName = 'location-outline';
                        break;
                        case 'Contacto/Curriculum':
                        iconName = 'clipboard-outline';
                        break;
                    }
                    return <Icon name={ iconName }  size={24} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Datos Personales" component={InfoPersonalScreen} />
            <Tab.Screen name="Domicilio" component={InfoDomicilioScreen} />
            <Tab.Screen name="Contacto/Curriculum" component={InfoContactoCurrScreen} />
        </Tab.Navigator>
    );
};
