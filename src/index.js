
/**
 * Generates a strong password with a desired length
 * @param {number} length of the password to be generated
 * @returns a string generated password with the desired length
 */
function generateStrongPassword(length = 12) {
 const allowedPasswordCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
 const strongPassword = Array .from( { length }, () => {
    const randomAllowedPasswordCharacterIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
    const randomAllowedPasswordCharacter = allowedPasswordCharacters.charAt(randomAllowedPasswordCharacterIndex);
    return randomAllowedPasswordCharacter;
 }).join('');
 
 return strongPassword;
}

/**
 * Checks if a password fullfills characteristics of a strong password - 
 * min length of 8 characters + contains at least one higher case, lower case, number and special character
 * @param {string} password to be checked by method
 * @returns {boolean} True if the password fillfilled the strong password characteristics
 */
function isStrongPassword(password) {
 if (password.length < 8) {
 return false;
 }
 const isPasswordStrong = /[A-Z]/.test(password) &&
 /[a-z]/.test(password) &&
 /\d/.test(password) &&
 /[!@#$%^&*()_+]/.test(password);
 return isPasswordStrong;
}

module.exports = {generateStrongPassword, isStrongPassword};