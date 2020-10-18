const crypto = require('crypto')
const Base58 = require('@darkwolf/base58.cjs')

class Hash {}
Hash.create = key => Base58.encode(crypto.createHmac('sha512', key).digest()).slice(20, 84)
Hash.random = () => Hash.create(crypto.randomBytes(64))
Hash.createUID = key => Hash.create(key).slice(20, 40)
Hash.randomUID = () => Hash.random().slice(20, 40)
Hash.isHash = value => /^[AveDarkwo1f23456789BCEFGHJKLMNPQRSTUVWXYZbcdghijmnpqstuxyz]{64}$/.test(value)
Hash.isUID = value => /^[AveDarkwo1f23456789BCEFGHJKLMNPQRSTUVWXYZbcdghijmnpqstuxyz]{20}$/.test(value)

module.exports = Hash
