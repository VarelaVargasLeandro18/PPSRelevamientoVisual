import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import firebase from '../../utils/firebase';
import { Fotografiar } from '../../screens/Fotografiar/fotografiar';
import { Votar } from '../../screens/Votar/votar';
import { Galeria } from '../../screens/Galeria/galeria';


const BottomNav = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
  const [ logged, setLogged ] = useState(false);

  firebase.auth().onAuthStateChanged( (user) => {

    if ( user ) {
      setLogged(true);
      return
    }

    if ( !user && !logged ) return

    setLogged(false);
  } );

    return (
        <BottomNav.Navigator 
          activeColor='blue' 
          inactiveColor='black' 
          barStyle={ {backgroundColor:'#ffcc'} }
          keyboardHidesNavigationBar={true}
        >
          <BottomNav.Screen options={ {tabBarIcon: () => <FontAwesome5 name="camera" size={24} color="black" /> } } name="Fotografiar" component={Fotografiar} />
          <BottomNav.Screen options={ {tabBarIcon: () => <FontAwesome5 name="star" size={24} color="black" /> } } name="Votar" component={Votar} />
          <BottomNav.Screen options={ {tabBarIcon: () => <FontAwesome5 name="image" size={24} color="black" /> } } name="Galería" component={Galeria} />
        </BottomNav.Navigator>
    )
}