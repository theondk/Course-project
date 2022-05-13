const delay = require('./login')

describe('delay', () => {
    test('Успешно', async () => {
        delay({
                username: 'Sasha',
                password: '11111111'
            })
            .then(user => expect(user.data).not.toBe(false))
    })
})

describe('delay', () => {
    test('Аккаунт не найден', async () => {
        delay({
                username: 'alex',
                password: '11111111'
            })
            .then(user => expect(user.data).toBe(false))
    })
})