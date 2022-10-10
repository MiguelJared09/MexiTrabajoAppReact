import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const IndvServicioScreen = ( {navigation}: Props ) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Pantalla Individual Servicio</Text>
            <Button
                title="BackBusqueda"
                onPress={() => navigation.pop() }
            />
        </View>
    );
};
