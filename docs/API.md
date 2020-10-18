[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Buffer]: https://nodejs.org/api/buffer.html#buffer_class_buffer

# API
### class: Hash
#### `static` Hash.create(key)
* `key` <[string][string] | [Buffer][Buffer]> E.g., `'Ave, Darkwolf!'`.
* returns: <[string][string]> 64 bytes from Base58-encoded SHA-512 hash. E.g., `'Tv617ueSfKje71a7RNPTq1zgfjTpx68tCjKQKBzQbWfidQvZUVZH7emRmqvFgKe3'`.

#### `static` Hash.random()
* returns: <[string][string]> Random 64 bytes from Base58-encoded SHA-512 hash. E.g., `'7UEYU2L7DjDntjSPBcpHXn7qLEDR6gzzL8aheWWqLeaJfVbCU5PGT5JMQob8d18G'`.

#### `static` Hash.createUID(key)
* `key` <[string][string] | [Buffer][Buffer]> E.g., `'Ave, Darkwolf!'`.
* returns: <[string][string]> 20 bytes from Base58-encoded SHA-512 hash. E.g., `'q1zgfjTpx68tCjKQKBzQ'`.

#### `static` Hash.randomUID()
* returns: <[string][string]> Random 20 bytes from Base58-encoded SHA-512 hash. E.g., `'Xn7qLEDR6gzzL8aheWWq'`.

#### `static` Hash.isHash(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>

#### `static` Hash.isUID(value)
* `value` <[any][Object]>
* returns: <[boolean][boolean]>
