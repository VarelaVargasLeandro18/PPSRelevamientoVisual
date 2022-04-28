import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export declare interface ITwoButtonsContainerProps {
    containerStyle : any,
    firstButtonStyle: any,
    firstButtonOnPress?() : void,
    firstButtonTextStyle: any,
    firstButtonText: string,
    secondButtonStyle: any,
    secondButtonTextStyle: any,
    secondButtonOnPress?() : void,
    secondButtonText: string,
}

export const TwoButtonsContainer = ( 
    { 
        containerStyle, 
        firstButtonStyle,
        firstButtonOnPress, 
        firstButtonTextStyle, 
        firstButtonText, 
        secondButtonOnPress, 
        secondButtonTextStyle, 
        secondButtonText 
    } : ITwoButtonsContainerProps ) => (
    <View style={containerStyle}>
        <Button style={firstButtonStyle} mode="contained" onPress={firstButtonOnPress}>
            <Text style={firstButtonTextStyle}>{firstButtonText}</Text>
        </Button>
        <Button mode="text" onPress={secondButtonOnPress}>
            <Text style={secondButtonTextStyle}>{secondButtonText}</Text>
        </Button>
    </View>
);