const {generateStrongPassword, isStrongPassword} = require('../src/index')

describe('isStrongPassword', () => {
    test('check if a too short password is flagged as not strong', () => {
        expect(isStrongPassword('pC%mD8T')).toEqual(false);
    })

    test('check if a missing special character is flagged as not strong', () => {
        expect(isStrongPassword('Hello World')).toEqual(false);
    })

    test('check if a missing lower case character is flagged as not strong', () => {
        expect(isStrongPassword('PC%MD8TPCKN2')).toEqual(false); 
    })

    test('check if a missing higher case character is flagged as not strong', () => {
        expect(isStrongPassword('pc%md8tpckn2')).toEqual(false); 
    })

    test('check if a missing number character is flagged as not strong', () => {
        expect(isStrongPassword('pc%mdtpckn')).toEqual(false); 
    })


})

describe('generateStrongPassword', () => {
    test('generate a length 1 password', () => {
        expect(()=>generateStrongPassword(1)).toThrow(Error);
    })

    test('check if a generated password is strong', () => {
        expect(isStrongPassword(generateStrongPassword(8))).toEqual(true);
    })


    test('check if a generated password is not strong', () => {
        expect(()=>isStrongPassword(generateStrongPassword(7))).toThrow(Error);
    })

    test('check if a 7-letter pwd is not strong', () => {
        expect(isStrongPassword('s4vn4a3')).toEqual(false);
    })


})