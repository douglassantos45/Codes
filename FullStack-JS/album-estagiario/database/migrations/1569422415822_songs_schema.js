'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

//Crinado Tabela
class SongsSchema extends Schema {
  up () {
    this.create('songs', (table) => {
      table.increments()
      table.string("name")
      table.integer   ("album_id")
           .references("id")//Referença para a tabela album
           .inTable   ("albums")
           .onDelete  ("CASCADE")
           .onUpdate  ("CASCADE")
      table.timestamps()
    })
  }

  down () {
    this.drop('songs')
  }
}

module.exports = SongsSchema
