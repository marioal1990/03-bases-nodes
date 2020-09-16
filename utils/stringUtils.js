var validateInputNumber = (arg) => {
    return Number.isNaN(Number.parseInt(arg))
}

var validateInputName = (arg) => {
    return arg.trim();
}

module.exports = {
    //INPUTS VALIDATE
    validateInputNumber,
    validateInputName
}