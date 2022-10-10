import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import { styles } from '../../theme/AppTheme';

interface Props extends DrawerScreenProps<any, any>{}


export const SplashScreen = ({navigation}: Props) => {
    return (
        <View style={{ ...styles.globalMargin, flex: 1, justifyContent: 'center', alignContent: 'center',}}>
            <Text>SplashScreen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('InicioSesionScreen')}
            />
            <ActivityIndicator color="red" size={100}/>
        </View>
    );
};
