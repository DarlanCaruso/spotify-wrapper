import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQAjNWtGUNT9UAGAZRo3iLmKPTrhsKLdsKoB6bXBcdlTRKmpgT9Ub8LsasT8wL5E8VxDaJafTavUkNYa9YqrMrumyBIATQFrKstM1XpBo464hdAomViTYOYh6UI4g5hK4nyRbJobBZeltdHj',
});

const albums = spotify.search.searchAlbums('Godsmack');
albums
  .then((data) => {
    data.albums.items.map(item => console.log(item.name));
  });

