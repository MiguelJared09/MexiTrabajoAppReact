import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any>{}

export const BusquedaVacantesScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Búsqueda Trabajadores</Text>
            <Button
                title="P. Ind Trabajo"
                onPress={() => navigation.navigate('IndvOfertaLaboralScreen')}
            />
        </View>
    );
};
