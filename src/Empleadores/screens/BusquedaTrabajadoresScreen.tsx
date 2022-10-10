import React from 'react';
import { View, Text, Button } from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../../theme/AppTheme';

// interface Props extends StackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const BusquedaTrabajadoresScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Búsqueda Trabajadores</Text>
            <Button
                title="P. Ind Servicio"
                onPress={() => navigation.navigate('IndvServicioScreen')}
            />
        </View>
    );
};
