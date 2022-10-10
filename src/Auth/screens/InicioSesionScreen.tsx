import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any>{}


export const InicioSesionScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Inicio Sesión</Text>
            <Button
                title="Registro"
                onPress={() => navigation.navigate('PreRegistroScreen')}
            />
            <Button
                title="Rec Password"
                onPress={() => navigation.navigate('RecContrasena')}
            />
        </View>
    );
};
