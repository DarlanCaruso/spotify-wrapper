'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function searchAll(type, query) {
  var queryStr = query.replace(/ /g, '+');
  var typeConcat = type.toString();
  return this.request(this.apiURL + '/search?q=' + queryStr + '&type=' + typeConcat);
}

function search() {
  return {
    searchAlbums: searchAll.bind(this, 'album'),
    searchArtists: searchAll.bind(this, 'artist'),
    searchPlaylists: searchAll.bind(this, 'playlist'),
    searchTracks: searchAll.bind(this, 'track')
  };
}