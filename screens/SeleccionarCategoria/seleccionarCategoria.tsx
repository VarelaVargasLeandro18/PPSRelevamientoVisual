import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

import { GlobalContainer } from '../../components/centeredVHContainer';
import { UserContext } from '../../userContext';

export const SeleccionarCategoria = ( {navigation}: NativeStackScreenProps<any, "SeleccionarCategoría"> ) => {
    const userContext = useContext(UserContext);
    
    const seleccionarCategoria = ( categoria : string ) => {
        userContext.categoria = categoria;
        navigation.navigate("HomeNav", { screen: "Votar" });
    }

    return (
        <GlobalContainer>
            <TouchableHighlight
                underlayColor={"#D3B7547F"}
                onPress={ () => seleccionarCategoria( "Linda" ) }>
                    <Image style={styles.button} source={require('../../assets/cute_icon.png')}/>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor={"#D3B7547F"}
                onPress={ () => seleccionarCategoria( "Fea" ) }>
                    <Image style={styles.button} source={require('../../assets/ugly_icon.png')}/>
            </TouchableHighlight>
        </GlobalContainer>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 400,
        width: 400
    }
});