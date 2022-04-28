import React from 'react';
import { FAB } from 'react-native-paper';

import { logIn } from '../../services/accountService';
import { checkCorrectEmail, checkNotEmptyFields } from '../../services/checkCredentialsService';
import { showToastAndroid } from '../../utils/showToastAndroid';
import { GlobalContainer } from '../../components/centeredVHContainer';
import { LogIn } from './login';
import { logInDefaultMessages } from './logInMessages';


const unsuccessfullLogIn = ( reason : any ) => {
    if ( reason.code === "auth/internal-error" ) {
        showToastAndroid( logInDefaultMessages.logInFailureIncorrect );
        return
    }
    showToastAndroid( logInDefaultMessages.logInFailureStandard );
}

export const LogInContainer = ( { navigation } : any ) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const handleLogIn = () => {
        if ( 
            !(checkNotEmptyFields( email, password, () => showToastAndroid( logInDefaultMessages.emptyFields ) ) && 
            checkCorrectEmail( email, () => showToastAndroid( logInDefaultMessages.emailError ) )) 
        ) return;

        logIn( email, password )
            .then( () => {
                showToastAndroid( logInDefaultMessages.logInSuccess );
                setEmail("");
                setPassword("");
                navigation.navigate( "Home" );
            } )
            .catch( unsuccessfullLogIn );
    }

    const handleOpen = ( { open } : { open: boolean } ) => {
        if( open ) {
            setEmail("");
            setPassword("");
            setOpen(open);
            return
        }

        setOpen(open)                    
    }

    const autoLogIn = ( [email, password] : string[] ) => { 
        setEmail(email); 
        setPassword(password); 
    }

    return (
        <>
            <GlobalContainer>
                <LogIn 
                    navigation={navigation} 
                    handleLogIn={handleLogIn} 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                />
            </GlobalContainer>
            <FAB.Group
                visible={true}
                open={open}
                icon="email"
                onStateChange={ handleOpen }
                actions={[
                    { icon: 'star', label: "Leandro Varela Vargas", onPress: () => { autoLogIn( ["varelavargasleandro@protonmail.com", "123456"] ) } },
                    { icon: 'star', label: "Juan Perez", onPress: () => { autoLogIn( ["jperez@gmail.com", "123456"] ) } },
                    { icon: "star", label: "Pedro Salamanca", onPress: () => { autoLogIn( ["psalamanca@yahoo.com.ar", "123456"] ) } }
                ]}
            />
        </>
    )
}