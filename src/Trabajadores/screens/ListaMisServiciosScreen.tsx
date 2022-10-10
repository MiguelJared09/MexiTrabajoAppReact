import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any>{}


export const ListaMisServiciosScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Lista Mis Servicio</Text>
            <Button
                title="P. Ind Mi Servicio"
                onPress={() => navigation.navigate('IndvMiServicioScreen')}
            />
        </View>
    );
};
