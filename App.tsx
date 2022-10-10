import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/Empleadores/navigation/MenuLateral';
// import { MenuLateralT } from './src/Trabajadores/navigation/MenuLateralT';
// import { StackAuth } from './src/Auth/navigation/StackAuth';
const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral/>
    </NavigationContainer>
  );
};

export default App;
