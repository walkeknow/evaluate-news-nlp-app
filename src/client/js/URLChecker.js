function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);

    // regex to verify complete URL
    let exp = /(\w+):\/\/([\w-.]+):?(\d+)?\/?/;
    if (!exp.test(inputText)) {
        alert("Please enter a valid URL with protocol! (eg. https)")
        return null
    }
    return inputText;
}

export { checkURL }
