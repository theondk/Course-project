const delay = require('./recover')

describe('delay', () => {
    test('Успешно', async () => {
        delay({
                username: 'User1',
                password: '11111111',
                phrase: 'user1'
            })
            .then(user => expect(user.data).toBe(true))
    })
})

describe('delay', () => {
    test('Неверная фраза или имя пользователя', async () => {
        delay({
                username: 'User1',
                password: '11111111',
                phrase: 'user2'
            })
            .then(user => expect(user.data).not.toBe(true))
    })
})