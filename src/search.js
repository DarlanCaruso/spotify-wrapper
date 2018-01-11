import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

export const searchAll = (query, type) => {
  const queryStr = query.replace(/ /g, '+');
  const typeConcat = type.toString();
  return fetch(`${API_URL}/search?q=${queryStr}&type=${typeConcat}`, HEADERS).then(toJSON);
};
export const searchAlbums = (query) => {
  return searchAll(query, 'album');
};
export const searchArtists = (query) => {
  return searchAll(query, 'artist');
};
export const searchTracks = (query) => {
  return searchAll(query, 'track');
};
export const searchPlaylists = (query) => {
  return searchAll(query, 'playlist');
};
