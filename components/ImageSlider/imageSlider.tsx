import { useState } from 'react';
import { View } from 'react-native-animatable';
import { Button, Text, Title } from 'react-native-paper';
import { Image, ImageURISource } from 'react-native';
import { IFoto } from '../../screens/Fotografiar/fotografiar';


export declare interface IImageSliderProps {
    containerStyle : any,
    images : IFoto[],
    buttonsContainerStyle : any,
    buttonStyle : any,
    buttonTextStyle : any,
    setSelectedIndex? : ( index : number ) => void
}

export const ImageSlider = ( {containerStyle, images, buttonsContainerStyle, buttonStyle, buttonTextStyle, setSelectedIndex} : IImageSliderProps ) => {
    const [image, setImage] = useState<IFoto>( images[0] );
    
    const go = ( up : boolean ) => {
        const index = images.indexOf(image);

        let newIndex = up ? index + 1 : index - 1;

        if ( newIndex > (images.length - 1) || newIndex < 0 ) return

        const newImage = images[newIndex];
        setImage(newImage);
        if ( !setSelectedIndex ) return
        setSelectedIndex(newIndex);
    }

    return (
        <View style={containerStyle}>
            {
                images.length === 0 ?
                <Text 
                    style={ { width: 250, height: 250, alignSelf: 'center', textAlign: 'center', textAlignVertical: 'center', fontSize: 36 } }>
                        No tiene imágenes!
                </Text> :
                <><Text style={ {alignSelf:'center', textAlign: 'center', color: 'white'} }>Usuario: {image.email}</Text>
                <Text style={ {alignSelf:'center', textAlign: 'center', color: 'white'} }>Tipo: {image.tipo}</Text>
                <Image defaultSource={ require('../../assets/placeholder.png') } style={ {width: 250, height: 250, alignSelf: 'center'} } source={ image.fotoURL } /></>
            }
            <View style={buttonsContainerStyle}>
                <Button disabled={ images.length === 0 } onPress={ () => go(false) } style={ {...buttonStyle, maxWidth: 150} }>
                    <Text style={buttonTextStyle}>{"<="}</Text>
                </Button>
                <Button disabled={images.length === 0} onPress={ () => go(true) } style={ {...buttonStyle, maxWidth: 150} }>
                    <Text style={buttonTextStyle}>{"=>"}</Text>
                </Button>
            </View>
        </View>
    );
}