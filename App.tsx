import { LeckerliOne_400Regular, useFonts } from '@expo-google-fonts/leckerli-one';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState } from 'react';
import { ActivityIndicator, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { BottomNavigation } from './components/bottomButtonsNavigation/bottomButtonsNavigations';
import { LogInContainer } from './screens/LogIn/loginContainer';
import { Splash } from './screens/Splash/Splash';
import { UserContext } from './userContext';

const theme = {
  ...DefaultTheme,
  fontFamily: {...DefaultTheme.fonts.regular.fontFamily = 'LeckerliOne_400Regular'} 
};

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular
  });
  const [user, setUser] = useState<string>("");

  if( !fontsLoaded ) return <ActivityIndicator/>

  return (
    <PaperProvider>
      <UserContext.Provider value={ {user: user, setUser} }>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={ { headerShown: false } }>
            <Stack.Screen
              name="LogIn"
              component={LogInContainer}/>
            <Stack.Screen
              name='HomeNav'
              component={BottomNavigation}/>
            <Stack.Screen
              name="Splash"
              component={Splash}
              initialParams={ {to: "LogIn"} }/>
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </PaperProvider>
  );
}