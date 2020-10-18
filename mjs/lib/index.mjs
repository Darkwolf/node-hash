import crypto from 'crypto'
import Base58 from '@darkwolf/base58.mjs'

export default class Hash {
  static create(key) {
    return Base58.encode(crypto.createHmac('sha512', key).digest()).slice(20, 84)
  }

  static random() {
    return Hash.create(crypto.randomBytes(64))
  }

  static createUID(key) {
    return Hash.create(key).slice(20, 40)
  }

  static randomUID() {
    return Hash.random().slice(20, 40)
  }

  static isHash(value) {
    return /^[AveDarkwo1f23456789BCEFGHJKLMNPQRSTUVWXYZbcdghijmnpqstuxyz]{64}$/.test(value)
  }

  static isUID(value) {
    return /^[AveDarkwo1f23456789BCEFGHJKLMNPQRSTUVWXYZbcdghijmnpqstuxyz]{20}$/.test(value)
  }
}
