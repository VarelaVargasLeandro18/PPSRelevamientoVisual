import firebase from 'firebase/compat';
import { useContext, useState } from 'react';
import { Image, ImageURISource, LogBox, Pressable } from 'react-native';
import uuid from 'react-native-uuid';

import { GlobalContainer } from '../../components/centeredVHContainer';
import { UserContext } from '../../userContext';
import fb from '../../utils/firebase';
import { Camara } from '../Camara/camara';

LogBox.ignoreLogs(['Setting a timer']);

//'gs://pps---tup.appspot.com'

const storage = fb.storage('gs://pps---tup.appspot.com')

declare type tipo = "Linda" | "Fea";

export declare interface IFoto {
    tipo : tipo | undefined,
    fotoURL : ImageURISource,
    email : string
}

export const Fotografiar = () => {
    const [foto, setFoto] = useState();
    const [mostrarCamara, setMostrarCamara] = useState<boolean>( false );
    const [tipoFoto, setTipoFoto] = useState<tipo>();
    const userContext = useContext( UserContext )
    const user = userContext.user;

    const sacarFoto = ( tipo : tipo ) => {
        setTipoFoto(tipo);
        setMostrarCamara(true);
    }

    const settearFoto = async ( uri : string ) => {
        setMostrarCamara( false );
        const img = (await (await fetch(uri)).blob());
        const docName = uuid.v4().toString();
        const imgRefName = user + "/" + tipoFoto + "/" + docName;
        const ref = storage.ref( imgRefName );
        (await ref.put(img));
        let value = "";
            value = await ref.getDownloadURL();
            console.log(value)
            const foto : IFoto = {
                email: user,
                fotoURL: {uri: value},
                tipo: tipoFoto
            }
            await fb.firestore().collection('RelevamientoVisual').doc( docName ).set( foto );
    }

    return (
        mostrarCamara?
        <Camara settearFoto={ settearFoto }/>
        :
        <GlobalContainer>
            <Pressable onPress={ () => sacarFoto( "Linda" ) }>
                    <Image
                        style={ { width: 300, height: 300 } }
                        source={require('../../assets/cute_icon.png')}
                    />
                </Pressable>
            <Pressable onPress={ () => sacarFoto( "Fea" ) }>
                <Image
                    style={ { width: 300, height: 300 } }
                    source={require('../../assets/ugly_icon.png')}
                />
            </Pressable>
        </GlobalContainer>
    );
};