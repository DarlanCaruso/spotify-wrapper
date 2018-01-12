function searchAll(type, query) {
  const queryStr = query.replace(/ /g, '+');
  const typeConcat = type.toString();
  return this.request(`${this.apiURL}/search?q=${queryStr}&type=${typeConcat}`);
}

export default function search() {
  return {
    searchAlbums: searchAll.bind(this, 'album'),
    searchArtists: searchAll.bind(this, 'artist'),
    searchPlaylists: searchAll.bind(this, 'playlist'),
    searchTracks: searchAll.bind(this, 'track'),
  };
}
