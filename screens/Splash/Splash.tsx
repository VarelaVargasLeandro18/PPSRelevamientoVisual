import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { GlobalContainer } from '../../components/centeredVHContainer';
import { texto } from './logo';

export const Splash = ({navigation, route} : any) => {

    useEffect( () => {
        setTimeout( () => navigation.navigate( route.params.to ), 3500 )
    }, [route] );

    return (
        <GlobalContainer>
            <Animatable.Image
                style = { styles.image }
                animation={ "bounceIn" }
                duration={3500}
                source={ require("../../assets/icon.png") } />
            
                <Animatable.Text 
                    style={styles.titleText} 
                    duration={3500}
                    animation={"zoomInUp"}>
                        {texto}
                </Animatable.Text>
        </GlobalContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250
    },
    titleText: {
        fontFamily: 'LeckerliOne_400Regular',
        color: '#000f',
        textAlign: 'center',
        fontSize: 30,
        flexWrap: 'wrap',
        width: widthPercentageToDP('50%'),
        alignSelf: 'center'
    }
});