'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtistRelated = exports.getArtistTopTracks = exports.getArtistAlbums = exports.getArtists = exports.getArtist = undefined;

var _config = require('./config');

var _utils = require('./utils');

var getArtist = exports.getArtist = function getArtist(id) {
  return fetch(_config.API_URL + '/artists/' + id, _config.HEADERS).then(_utils.toJSON);
};
var getArtists = exports.getArtists = function getArtists(ids) {
  return fetch(_config.API_URL + '/artists/' + ids, _config.HEADERS).then(_utils.toJSON);
};
var getArtistAlbums = exports.getArtistAlbums = function getArtistAlbums(id, tipo) {
  if (!tipo) return fetch(_config.API_URL + '/artists/' + id + '/albums', _config.HEADERS).then(_utils.toJSON);
  return fetch(_config.API_URL + '/artists/' + id + '/albums?album_type=' + tipo, _config.HEADERS).then(_utils.toJSON);
};
var getArtistTopTracks = exports.getArtistTopTracks = function getArtistTopTracks(id) {
  return fetch(_config.API_URL + '/artists/' + id + '/top-tracks', _config.HEADERS).then(_utils.toJSON);
};
var getArtistRelated = exports.getArtistRelated = function getArtistRelated(id) {
  return fetch(_config.API_URL + '/artists/' + id + '/related-artists', _config.HEADERS).then(_utils.toJSON);
};