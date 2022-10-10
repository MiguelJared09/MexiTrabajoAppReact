import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackBusquedaTrabajos } from './StackBusquedaTrabajos';
import { PublicarServicioScreen } from '../screens/PublicarServicioScreen';
import { StackMisServicios } from './StackMisServicios';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { TabsT } from './BottomTabT';
import { PerfilComplementNav } from '../../PerfilComplement/navigation/PerfilComplementNav';

const Drawer = createDrawerNavigator();

export const MenuLateralT = () => {
    return (
        <Drawer.Navigator
            drawerContent={ (props) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name="Bottom Tabs" component={TabsT} />
            <Drawer.Screen name="StackBusquedaTrabajos" component={StackBusquedaTrabajos} />
            <Drawer.Screen name="PublicarServicioScreen" component={PublicarServicioScreen} />
            <Drawer.Screen name="StackMisServicios" component={StackMisServicios} />
            <Drawer.Screen name="PerfilComplementNav" component={PerfilComplementNav} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View>
                <View
                    style={styles.profilePhotoContainer}
                >
                    <Image
                        source={{
                            uri:'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Clipart.png',
                        }}
                        style={styles.profilePhoto}
                    />
                </View>
                {/* Opciones del Menú */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('Bottom Tabs')}
                    >
                        <Text style={styles.menuItemText}>Navegar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('StackBusquedaTrabajos')}
                    >
                        <Text style={styles.menuItemText}>Buscar Trabajos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('PublicarServicioScreen')}
                    >
                        <Text style={styles.menuItemText}>Publicar Servicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('StackMisServicios')}
                    >
                        <Text style={styles.menuItemText}>Mis Servicios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('PerfilComplementNav')}
                    >
                        <Text style={styles.menuItemText}>Completar Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};
