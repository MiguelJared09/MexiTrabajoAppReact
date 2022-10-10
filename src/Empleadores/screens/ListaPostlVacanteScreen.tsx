import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{}

export const ListaPostlVacanteScreen = ({navigation}: Props) => {
    return (
        <View style={ styles.globalMargin }>
            <Text>Lista Postl-Vacnt</Text>
            <Button
                title="P.IndvPostl"
                onPress={() => navigation.navigate('IndPostulacionVacanteScreen') }
            />
        </View>
    );
};
