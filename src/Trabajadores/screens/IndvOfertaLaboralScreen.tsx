import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';
interface Props extends StackScreenProps<any, any>{}

export const IndvOfertaLaboralScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Pantalla Individual Trabajo</Text>
            <Button
                title="BackBusqueda"
                onPress={() => navigation.pop() }
            />
        </View>
    );
};
