'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = {
  searchAll: _search.searchAll,
  searchAlbums: _search.searchAlbums,
  searchArtists: _search.searchArtists,
  searchPlaylists: _search.searchPlaylists,
  searchTracks: _search.searchTracks,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumTracks: _album.getAlbumTracks
};