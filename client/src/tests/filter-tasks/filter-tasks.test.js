const delay = require('./filter-tasks')

describe('delay', () => {
    test('Верные задания', async () => {
        delay('8')
            .then(({data}) => expect(data[0].user.id).not.toEqual(6))
    })
})

describe('delay', () => {
    test('Неверные задания', async () => {
        delay('6')
            .then(({data}) => expect(data[0].user.id).toEqual(6))
    })
})