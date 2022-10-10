import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{}


export const IndvSolicitudServicioScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Pantalla Individual Mi Vacante</Text>
            <Button
                title="BackListaSolicitantes"
                onPress={() => navigation.navigate('ListaSolMiServicioScreen') }
            />
        </View>
    );
};
