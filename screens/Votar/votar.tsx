import { useContext, useEffect, useState } from 'react';
import { ImageURISource, View } from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

import { GlobalContainer } from '../../components/centeredVHContainer';
import { IImageSliderProps, ImageSlider } from '../../components/ImageSlider/imageSlider';
import { UserContext } from '../../userContext';
import fb from '../../utils/firebase';
import { IFoto } from '../Fotografiar/fotografiar';
import { styles } from './styles';
import uuid from 'react-native-uuid';

declare interface IVoto {
    foto : IFoto,
    rating : number,
    votador: string
}

export const Votar = ( {navigation} : any ) => {
    const [images, setImages] = useState<IFoto[]>([]);
    const [voted, setVoted] = useState<IVoto[]>([]);
    const [canVote, setCanVote] = useState<boolean>(true);
    const [cargando, setCargando] = useState<boolean>(true);
    const [rating, setRating] = useState<number>(0);
    const userContext = useContext(UserContext);
    const user = userContext.email;
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const imageSliderProps : IImageSliderProps = {
        buttonsContainerStyle: styles.buttonsContainer,
        buttonStyle: styles.button,
        buttonTextStyle: styles.buttonText,
        containerStyle: styles.imageSliderContainer,
        images: images,
        setSelectedIndex
    }

    const ratingCompleted = ( rating : number ) => {
        setRating(rating)
    }

    useEffect( () => {
        setCargando(true);
        fb.firestore().collection( 'RelevamientoVisual' ).where( 'email', '!=', user ).onSnapshot( (data) => {
            const values  = data.docs.map( doc => doc.data() );
            setImages(values as IFoto[]);
            fb.firestore().collection( 'RelevamientoVisual' ).where( 'votador', '==', user ).onSnapshot( (data) => {
                setVoted(data.docs.map( doc => doc.data() ) as IVoto[]);
                setCargando(false);
            } )
        } );
    }, [] );

    useEffect( () => chequearVotado(), [voted, selectedIndex] );

    const chequearVotado = () => {
        const imagen = images[selectedIndex];
        const voto = voted.find( voto => voto.votador === user && voto.foto.fotoURL.uri === imagen.fotoURL.uri  );
        if ( !voto || !voto.rating ) {
            setRating(0);
            setCanVote(true)
            return
        }
        
        setRating( voto.rating );
        setCanVote(false);
    }

    const onConfirmar = () => {
        const voto : IVoto = {
            foto: images[selectedIndex],
            rating,
            votador: user
        }
        fb.firestore().collection( 'RelevamientoVisual' ).doc( uuid.v4().toString() ).set( voto );
    };

    return (
        <GlobalContainer navigation={navigation}>
            <View style={styles.container}>
                <Rating
                    showRating
                    onFinishRating={ratingCompleted}
                    style={styles.rating}
                    type={"heart"}
                    jumpValue={1}
                    minValue={0}
                    tintColor="#00000030"
                    startingValue={rating}
                    readonly={!canVote}
                />
                <Text style={styles.text}>Usuario Creador</Text>
                {
                    cargando?
                    <ActivityIndicator/>
                    :
                    <ImageSlider {...imageSliderProps} />
                }
                <Button style={styles.button} onPress={ onConfirmar } disabled={!canVote}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </Button>
            </View>
        </GlobalContainer>
    )
}