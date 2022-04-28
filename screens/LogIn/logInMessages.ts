export interface ILogInMessages {
    emailError : string,
    logInSuccess: string,
    logInFailureStandard: string,
    logInFailureIncorrect: string,
    emptyFields: string
}

export const logInDefaultMessages : ILogInMessages = {
    emailError: "La dirección email ingresada no es válida.",
    logInSuccess: "¡Ha iniciado sesión correctamente!",
    logInFailureStandard: "Ha ocurrido un problema al iniciar sesión.",
    logInFailureIncorrect: "El email y/o contraseña ingresados no son correctos.",
    emptyFields: "Faltan campos por completar."
}