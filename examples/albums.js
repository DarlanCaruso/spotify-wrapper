import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Veil of Maya');
albums.then((data) => {
  data.albums.items.map(item => console.log(item.name));
});
