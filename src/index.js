import search from './search';
import album from './album';
import artist from './artist';

import { API_URL } from '../src/config';
import { toJSON } from '../src/utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
    this.artist = artist.bind(this)();
  }

  request(url) {
    const headers = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}
