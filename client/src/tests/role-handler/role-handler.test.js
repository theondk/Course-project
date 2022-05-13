const delay = require('./role-handler')

describe('delay', () => {
    test('Повышен', async () => {
        delay('inc')
            .then(({data}) => expect(data.role).toEqual('Управляющий'))
    })
})

describe('delay', () => {
    test('Понижен', async () => {
        delay('dec')
            .then(({data}) => expect(data.role).toEqual('Пользователь'))
    })
})