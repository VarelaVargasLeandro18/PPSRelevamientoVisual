import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export declare interface ITwoButtonsContainerProps {
    containerStyle : any,
    firstButtonStyle: any,
    firstButtonOnPress?() : void,
    firstButtonTextStyle: any,
    firstButtonText: string,
    firstButtonMode?: "text" | "contained" | "outlined",
    secondButtonStyle: any,
    secondButtonTextStyle: any,
    secondButtonOnPress?() : void,
    secondButtonText: string,
    secondButtonMode?: "text" | "contained" | "outlined"
}

export const TwoButtonsContainer = ( 
    { 
        containerStyle, 
        firstButtonStyle,
        firstButtonOnPress, 
        firstButtonTextStyle, 
        firstButtonText, 
        firstButtonMode,
        secondButtonOnPress, 
        secondButtonTextStyle, 
        secondButtonText,
        secondButtonStyle,
        secondButtonMode
    } : ITwoButtonsContainerProps ) => (
    <View style={containerStyle}>
        <Button style={firstButtonStyle} mode={firstButtonMode || "contained"} onPress={firstButtonOnPress}>
            <Text style={firstButtonTextStyle}>{firstButtonText}</Text>
        </Button>
        <Button style={secondButtonStyle} mode={secondButtonMode || "text"} onPress={secondButtonOnPress}>
            <Text style={secondButtonTextStyle}>{secondButtonText}</Text>
        </Button>
    </View>
);