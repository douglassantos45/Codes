'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Album extends Model {
    //relacionando várias músicas em um Album
    songs() {
        //Retornando varias músicas
        return this.hasMany('App/Models/Song');
    }

    //Escondendo informações
    static get hidden() {
        return ["created_at", "updated_at"];
    }
}

module.exports = Album
