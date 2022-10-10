import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any>{}

export const ListaMisVacantesScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Búsqueda Trabajadores</Text>
            <Button
                title="P. Ind Vacante"
                onPress={() => navigation.navigate('IndvMiVacanteScreen')}
            />
        </View>
    );
};
