import { StyleSheet } from 'react-native';
import { LogInContainer } from './screens/LogIn/loginContainer';
import { Splash } from './screens/Splash/Splash';

import { LeckerliOne_400Regular, useFonts } from '@expo-google-fonts/leckerli-one';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Home } from './screens/Home/home';


const theme = {
  ...DefaultTheme,
  fontFamily: {...DefaultTheme.fonts.regular.fontFamily = 'LeckerliOne_400Regular'} 
};

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    LeckerliOne_400Regular
  });

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={ { headerShown: false } }>
          <Stack.Screen
            name="LogIn"
            component={LogInContainer}/>
          <Stack.Screen
            name='Home'
            component={Home}/>
          <Stack.Screen
            name="Splash"
            component={Splash}
            initialParams={ {to: "LogIn"} }/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
