/**@type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')

//Factory.blueprint('App/Models/User', (faker) => {
//    return {
//        username: faker.username()
//    }
//})

//Criando Dados Fakes

Factory.blueprint('App/Models/Album', faker => ({
        name  : faker.name(),
        artist: faker.name()
}))

Factory.blueprint('App/Models/Song', faker => ({
    name: faker.name(),
    album_id: faker.integer({
        min: 1,
        max: 10
    })
}))