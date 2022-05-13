const delay = require('./registration')

describe('delay', () => {
    test('Пользователь существует', async () => {
        delay({ username: 'Sasha', password: '11111111', phrase: 'alex' })
            .then(user => expect(user.data).not.toBe(true))
    })
})

describe('delay', () => {
    test('Зарегистрирован', async () => {
        delay({ username: 'Alexander', password: '11111111', phrase: 'alex' })
            .then(user => expect(user.data).toBe(true))
    })
})