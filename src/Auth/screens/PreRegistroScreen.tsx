import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any>{}

export const PreRegistroScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Inicio Sesión</Text>
            <Button
                title="Registro Trabj"
                onPress={() => navigation.navigate('RegistroTrabajadoresScreen')}
            />
            <Button
                title="Reg Empl"
                onPress={() => navigation.navigate('RegistroEmpleadoresScreen')}
            />
        </View>
    );
};
