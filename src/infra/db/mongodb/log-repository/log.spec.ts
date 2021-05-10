import { Collection } from 'mongodb'
import { AccountMongoRepository } from '../account-repository/account'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log'

describe('LogMongoErrorRepository', () => {
  let errorCollection: Collection
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  test('Should create an error log on success', async () => {
    const sut = new LogMongoRepository()
    await sut.log('any_error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
