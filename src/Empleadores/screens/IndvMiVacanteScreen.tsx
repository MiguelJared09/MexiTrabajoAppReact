import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{}


export const IndvMiVacanteScreen = ({navigation}: Props) => {
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
