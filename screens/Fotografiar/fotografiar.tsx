import { useContext, useState } from 'react';
import { ImageURISource, LogBox } from 'react-native';
import uuid from 'react-native-uuid';

import { UserContext } from '../../userContext';
import fb from '../../utils/firebase';
import { showToastAndroid } from '../../utils/showToastAndroid';
import { Camara } from '../Camara/camara';

LogBox.ignoreLogs(['Setting a timer']);

const storage = fb.storage('gs://pps---tup.appspot.com')

export declare interface IFoto {
    tipo : string,
    fotoURL : ImageURISource,
    email : string
}

export const Fotografiar = ( {navigation} : any ) => {
    const userContext = useContext( UserContext )
    const user = userContext.email;
    const [sacandoFoto, setSacandoFoto] = useState<boolean>(false);

    const settearFoto = async ( uri : string ) => {
        const tipoFoto = userContext.categoria;
        const img = (await (await fetch(uri)).blob());
        const docName = uuid.v4().toString();
        const imgRefName = user + "/" + tipoFoto + "/" + docName;
        const ref = storage.ref( imgRefName );
        (await ref.put(img));
        let value = await ref.getDownloadURL();
        const foto : IFoto = {
            email: user,
            fotoURL: {uri: value},
            tipo: tipoFoto
        }
        await fb.firestore().collection('RelevamientoVisual').doc( (new Date()).toISOString() ).set( foto );
        showToastAndroid( "Foto subida!" );
        setSacandoFoto(false);
        navigation.navigate("Galería");
    }

    return (
        <Camara settearFoto={ settearFoto } sacandoFoto={sacandoFoto} setSacandoFoto={setSacandoFoto}/>
    );
};