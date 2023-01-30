// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
    return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}