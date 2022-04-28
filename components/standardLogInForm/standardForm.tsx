import { View, Image } from 'react-native';

import { ILabelledTextInputProps, LabelledTextInput } from '../labelledTextInput/labelledTextInput';
import { ITwoButtonsContainerProps, TwoButtonsContainer } from '../twoButtonsContainer/twoButtonsContainer';

export declare interface IStandardFormProps {
    containerStyles : any,
    firstLabelledTextInputProps : ILabelledTextInputProps,
    secondLabelledTextInputProps : ILabelledTextInputProps,
    imageStyle : any,
    twoButtonsContainerProps : ITwoButtonsContainerProps,
}

export const StandardForm = ( props : IStandardFormProps ) => (
    <View style={props.containerStyles}>
            <LabelledTextInput {...props.firstLabelledTextInputProps} />

            <LabelledTextInput {...props.secondLabelledTextInputProps} />

            <Image style={ props.imageStyle } source={ require('../../assets/icon.png') } />

            <TwoButtonsContainer {...props.twoButtonsContainerProps} />
    </View>
);