# @fsd24229/password-utilities

By Felix Dilly & Leonardo Barrinetos

Small NPM-Lib that provides a quick check, to verify the strength of a password. 

## Installation 

```bash
npm install @fsd24229/password-utilities
```
or 

```bash
yarn add @fsd24229/password-utilities
```

## Usage

Basic Usage

```js
import {generatePassword, isPasswordStrong} from '@fsd24229/password-utilities';

const newPassword = generatePassword(12);
const isStrong = isPasswordStrong(newPassword);

console.log(`New password:`, newPassword);
console.log(`The password is strong:`, isStrong);
```

## Contribution

Contribution are welcome! Please refer to [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about security policies, how to report vulnerabilities and our approach to handling concerns.

## License

This project is licensed under the [MIT License](./LICENSE.md).