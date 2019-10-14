'use strict'

/*
|--------------------------------------------------------------------------
| AlbumSongSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlbumSongSeeder {
  async run () {
    await Factory.model('App/Models/Album').createMany(10);//Criando muitas, ou no máximo 10 albuns
    await Factory.model('App/Models/Song').createMany(100);//Criando 100 músicas
  }
}

module.exports = AlbumSongSeeder
