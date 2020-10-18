# Hash
## Install
#### ECMAScript (Node.js v12.x LTS or higher)
`npm i --save @darkwolf/hash.mjs`
#### CommonJS (Node.js v10.x LTS or higher)
`npm i --save @darkwolf/hash.cjs`
## Using
```javascript
// ECMAScript
import Hash from '@darkwolf/hash.mjs'

// CommonJS
const Hash = require('@darkwolf/hash.cjs')

const hash = Hash.create('Ave, Darkwolf!') // 'Tv617ueSfKje71a7RNPTq1zgfjTpx68tCjKQKBzQbWfidQvZUVZH7emRmqvFgKe3'
const randomHash = Hash.random() // Random hash: '7UEYU2L7DjDntjSPBcpHXn7qLEDR6gzzL8aheWWqLeaJfVbCU5PGT5JMQob8d18G'
const uid = Hash.createUID('Ave, Darkwolf!') // 'q1zgfjTpx68tCjKQKBzQ'
const randomUid = Hash.randomUID() // Random UID: 'Xn7qLEDR6gzzL8aheWWq'
```
## [API Documentation](https://github.com/Darkwolf/node-hash/blob/master/docs/API.md)
## Contact Me
#### GitHub: [@PavelWolfDark](https://github.com/PavelWolfDark)
#### Telegram: [@PavelWolfDark](https://t.me/PavelWolfDark)
#### Email: [PavelWolfDark@gmail.com](mailto:PavelWolfDark@gmail.com)
