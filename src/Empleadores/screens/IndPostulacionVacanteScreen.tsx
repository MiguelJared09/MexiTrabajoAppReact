import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const IndPostulacionVacanteScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Pantalla Individual Mi Vacante</Text>
            <Button
                title="ListaPostulantes"
                onPress={() => navigation.navigate('ListaPostlVacanteScreen') }
            />
        </View>
    );
};
