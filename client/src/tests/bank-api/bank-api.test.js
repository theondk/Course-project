const delay = require('./bank-api')

describe('delay', () => {
    test('USD валюта (нужная)', async () => {
        delay()
            .then(({data}) => expect(data.rates[4].sellIso).toBe('USD'))
    })
})

describe('delay', () => {
    test('Любая другая валюта (не USD (ненужная))', async () => {
        delay()
            .then(({data}) => expect(data.rates[5].sellIso).not.toBe('USD'))
    })
})