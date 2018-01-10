import { API_URL } from './config';
import { toJSON } from './utils';

export const searchAll = (query, type) => {
  const queryStr = query.replace(/ /g, '+');
  const typeConcat = type.toString();
  return fetch(`${API_URL}/search?q=${queryStr}&type=${typeConcat}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + 'BQAwpBOhcpLarwnioHhMvlvXS0vm4KpYexccjobXtF_ew_oUoybQMvX1kRwnO2lsacApiR8eLPZo4eB1Baoj-iwHTk7UvkCZJRzOudGcE0ALHBayioqi47v_ubSnLA4n4zg7oDP2_WKkjwoE',
    },
  }).then(toJSON);
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
