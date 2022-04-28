import checkEmail from 'validator/lib/isEmail';
import checkStrEmpty from 'validator/lib/isEmpty';

export const checkNotEmptyFields = (email : string, password : string, onEmpty : () => void ) : boolean => {
    const isEmailEmpty = checkStrEmpty(email);
    const isPassEmpty = checkStrEmpty(password);

    if ( isEmailEmpty || isPassEmpty ) onEmpty();

    return !( isEmailEmpty || isPassEmpty );
};

export const checkCorrectEmail = ( email : string, onIncorrect : () => void ) : boolean => {
    const isEmail = checkEmail( email );

    if ( !isEmail ) onIncorrect();

    return isEmail;
}