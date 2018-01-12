export default function artist() {
  return {
    getArtist: id => this.request(`${this.apiURL}/artists/${id}`),
    getArtists: ids => this.request(`${this.apiURL}/artists/?ids=${ids}`),
    getArtistAlbums: (id, tipo) => {
      if (!tipo) return this.request(`${this.apiURL}/artists/${id}/albums`)
      return this.request(`${this.apiURL}/artists/${id}/albums?album_type=${tipo}`)
    },
    getArtistTopTracks: id => this.request(`${this.apiURL}/artists/${id}/top-tracks`),
    getArtistRelated: id => this.request(`${this.apiURL}/artists/${id}/related-artists`)
  };
}
