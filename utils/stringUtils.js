/**
 * Valida que el input number no sea un string 
 * y que sea dígitos
 * @param {*} arg El valor a validar, debe ser dígito
 */
const validateInputNumber = (arg) => {
    return Number.isNaN(Number.parseInt(arg))
};

/**
 * Valida que el input no esté vacio o sea undefined
 * @param {*} arg El input a validar, no debe estar vacio o ser undefined
 */
const validateInputFileName = (arg) => {
    return arg.trim();
};

module.exports = {
    //INPUTS VALIDATE
    validateInputNumber,
    validateInputFileName
}