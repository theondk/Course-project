const delay = require('./get-items')

describe('delay', () => {
    test('Некорректное значение', async () => {
        delay('http://localhost:8080/office/getAll?offset=0&limit=5')
            .then(offices => expect(offices.data.length).not.toBe(6))
    })
})

describe('delay', () => {
    test('Корректное значение', async () => {
        delay('http://localhost:8080/office/getAll?offset=0&limit=6')
            .then(offices => expect(offices.data.length).toBe(6))
    })
})