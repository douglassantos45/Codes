'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//Declarando namespace
const Album = use('App/Models/Album')
const Song  = use('App/Models/Song');


//Rota Raiz
Route.get("/", () => {
    return { greeting: "Hello World is JSON" };
})


//Rota Album
Route.get("/albums", async () => {
    //pegando dados do Album pelo ID em ordem Decrescente
    const albums = await Album.query()
        .orderBy("id", "desc")
        .fetch();//Busca

    return albums;
});


//Rota Album pelo ID
Route.get("/albums/:id", async ({ params }) => {
    //Pegando Album pelo id
    const albums = await Album.query()
        .with("songs")//Puxando método songs do Album.js
        .where("id", params.id)
        .first()//Pegando o Primeiro resultado

    return albums;
});

//Criando Album Via post 
Route.post("/albums", async ({ request }) => {
    //Pegando os campos a serem enviados
    const { artist, album } = request.all();//Pegar todos os campos e filtrar pelo artist e album

    const newAlbum  = new Album();

    //Passando os campos para a tabela
    newAlbum.name   = album;
    newAlbum.artist = artist;

    //Salvando no banco
    await newAlbum.save();

    return newAlbum;
});

//Deletando Album
Route.delete("/albums/:id", async ({ params }) => {
    //Passando o o parametro via ID para a constante album
    const album = await Album.find(params.id);

    //Excluindo
    return album.delete();
})


//Adicionando músicas no album
Route.post("/albums/:id/add/song", async ({ request, params }) => {
    const newSong = new Song();

    newSong.album_id = params.id; //Recebe o ID como parametro
    newSong.name     = request.input("song")//Receber um valor via input de nome Song
    
    await newSong.save();

    return newSong;
});

//Deletando música
Route.delete("/songs/:id", async ({params}) => {
    const song = await Song.find(params.id);

    await song.delete();
});


//Atualizando imagem
Route.put("/albums/:id/photo", async ({request, params}) => {
    //Pegando a imagem a partir do campo Album Image
    const image = request.file("album_image", {
        type: ["image"],
        size: "2mb"
    });

    //Movendo a imagem para uma pasta uploads
    await image.move("/public/uploads", {
        //Renomentado a imagem com JPG
        name: `${new Date().getTime()}.jpg`
    });

    //Armazenando imagem no servidor
    const pathImage = `localhost/3333/uploads/${image.fileName}`;

    //Receber o parametro via ID
    const album = await Album.find(params.id);
    album.image = pathImage;

    await album.save();

    return album;

})

