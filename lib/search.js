'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.searchAll = undefined;

var _config = require('./config');

var _utils = require('./utils');

var searchAll = exports.searchAll = function searchAll(query, type) {
  var queryStr = query.replace(/ /g, '+');
  var typeConcat = type.toString();
  return fetch(_config.API_URL + '/search?q=' + queryStr + '&type=' + typeConcat, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + 'BQAwpBOhcpLarwnioHhMvlvXS0vm4KpYexccjobXtF_ew_oUoybQMvX1kRwnO2lsacApiR8eLPZo4eB1Baoj-iwHTk7UvkCZJRzOudGcE0ALHBayioqi47v_ubSnLA4n4zg7oDP2_WKkjwoE'
    }
  }).then(_utils.toJSON);
};
var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return searchAll(query, 'album');
};
var searchArtists = exports.searchArtists = function searchArtists(query) {
  return searchAll(query, 'artist');
};
var searchTracks = exports.searchTracks = function searchTracks(query) {
  return searchAll(query, 'track');
};
var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return searchAll(query, 'playlist');
};