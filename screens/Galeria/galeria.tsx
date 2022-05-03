import firebase from 'firebase/compat';
import { useContext, useEffect, useState } from 'react';
import { ImageURISource, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { GlobalContainer } from '../../components/centeredVHContainer';
import { IImageSliderProps, ImageSlider } from '../../components/ImageSlider/imageSlider';
import { UserContext } from '../../userContext';
import fb from '../../utils/firebase';
import { IFoto } from '../Fotografiar/fotografiar';
import { styles } from './styles';

export const Galeria = () => {
    const [images, setImages] = useState<IFoto[]>([]);
    const [cargando, setCargando] = useState<boolean>(true);
    const userContext = useContext( UserContext );
    const user = userContext.user;

    useEffect( () => {
        setCargando(true);
        fb.firestore().collection( 'RelevamientoVisual' ).where( 'email', '==', user ).onSnapshot( (data) => {
            const values  = data.docs.map( doc => doc.data() );
            setImages(values as IFoto[]);
            setCargando(false);
        } );
    }, [] );

    const imageSliderProps : IImageSliderProps = {
        buttonsContainerStyle: styles.buttonsContainer,
        buttonStyle: styles.button,
        buttonTextStyle: styles.buttonText,
        containerStyle: styles.imageSliderContainer,
        images: images
    }

    return (
        <GlobalContainer>
            <View style={styles.container}>
                {
                    cargando?
                    <ActivityIndicator/> : 
                    <ImageSlider {...imageSliderProps} />
                }
            </View>
        </GlobalContainer>
    )
}