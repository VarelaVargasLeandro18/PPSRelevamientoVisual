import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

export declare interface ILabelledTextInputProps {
    containerStyle?: any,
    labelText: string,
    textInputStyle: any,
    textInputPlaceholder?: string,
    security: boolean,
    textInputOnChangeText?( text : string ) : void,
    value?: string
}

export const LabelledTextInput = ( { containerStyle, labelText, textInputStyle, textInputPlaceholder, security, textInputOnChangeText, value } : ILabelledTextInputProps ) => {

    return (
    <View style={containerStyle} >
        <TextInput
            autoComplete={undefined}
            value={value}
            label={labelText}
            mode={"flat"}
            style={textInputStyle}
            secureTextEntry={security}
            onChangeText={textInputOnChangeText} />
    </View>
)}