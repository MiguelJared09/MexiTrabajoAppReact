import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackBusquedaServicios } from './StackBusquedaServicios';
import { PublicarVacantesScreen } from '../screens/PublicarVacantesScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../theme/AppTheme';
import { StackMisVacantes } from './StackMisVacantes';
import { Tabs } from './BottomTabs';
import { PerfilComplementNav } from '../../PerfilComplement/navigation/PerfilComplementNav';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={ (props) => <MenuInterno {...props}/>}
        >
            <Drawer.Screen name="Bottom Tabs" component={Tabs} />
            <Drawer.Screen name="StackBusquedaServicios" component={StackBusquedaServicios} />
            <Drawer.Screen name="PublicarVacantesScreen" component={PublicarVacantesScreen} />
            <Drawer.Screen name="StackMisVacantes" component={StackMisVacantes} />
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
                        onPress={ () => navigation.navigate('StackBusquedaServicios')}
                    >
                        <Text style={styles.menuItemText}>Buscar Servicios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('PublicarVacantesScreen')}
                    >
                        <Text style={styles.menuItemText}>Publicar Vacante</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('StackMisVacantes')}
                    >
                        <Text style={styles.menuItemText}>Mis Vacantes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={ () => navigation.navigate('PerfilComplementNav')}
                    >
                        <Text style={styles.menuItemText}>Completar Mi Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};
