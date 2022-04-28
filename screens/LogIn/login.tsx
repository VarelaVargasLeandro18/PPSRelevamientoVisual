import { ILabelledTextInputProps } from '../../components/labelledTextInput/labelledTextInput';
import { IStandardFormProps, StandardForm } from '../../components/standardLogInForm/standardForm';
import { ITwoButtonsContainerProps } from '../../components/twoButtonsContainer/twoButtonsContainer';
import { styles } from './styles';

export const LogIn = ( { email, setEmail, password, setPassword, navigation, handleLogIn } : any ) => {

    const emailInputProps : ILabelledTextInputProps = {
        containerStyle: undefined,
        labelText: "Ingrese Dirección Email:",
        textInputStyle: styles.inputTransparent,
        textInputPlaceholder: "jperez@mail.com",
        security: false,
        textInputOnChangeText: setEmail,
        value: email
    };

    const passwordInputProps : ILabelledTextInputProps = {
        containerStyle: undefined,
        labelText: "Ingrese Contraseña:",
        textInputStyle: styles.inputTransparent,
        textInputPlaceholder: "Password",
        security: true,
        textInputOnChangeText: setPassword,
        value: password
    }

    const twoButtonsContainerProps : ITwoButtonsContainerProps = {
        containerStyle: undefined,
        firstButtonStyle: styles.buttonLogIn,
        firstButtonOnPress: handleLogIn,
        firstButtonTextStyle: styles.buttonText,
        firstButtonText: "Iniciar Sesión",
        secondButtonStyle: undefined,
        secondButtonTextStyle: undefined,
        secondButtonOnPress: undefined,
        secondButtonText: ""
    };

    const standardFormProps : IStandardFormProps = {
        containerStyles: styles.formContainer,
        imageStyle: styles.image,
        firstLabelledTextInputProps: emailInputProps,
        secondLabelledTextInputProps: passwordInputProps,
        twoButtonsContainerProps
    }

    return (
        <StandardForm {...standardFormProps}/>
    )

}