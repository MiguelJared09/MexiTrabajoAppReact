import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends StackScreenProps<any, any>{}


export const ListaSolMiServicioScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Lista Solicitudes-Servicio</Text>
            <Button
                title="P.IndvSol"
                onPress={() => navigation.navigate('IndvSolicitudServicioScreen') }
            />
        </View>
    );
};
