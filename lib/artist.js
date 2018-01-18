"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = artist;
function artist() {
  var _this = this;

  return {
    getArtist: function getArtist(id) {
      return _this.request(_this.apiURL + "/artists/" + id);
    },
    getArtists: function getArtists(ids) {
      return _this.request(_this.apiURL + "/artists/?ids=" + ids);
    },
    getArtistAlbums: function getArtistAlbums(id, tipo) {
      if (!tipo) return _this.request(_this.apiURL + "/artists/" + id + "/albums");
      return _this.request(_this.apiURL + "/artists/" + id + "/albums?album_type=" + tipo);
    },
    getArtistTopTracks: function getArtistTopTracks(id) {
      return _this.request(_this.apiURL + "/artists/" + id + "/top-tracks");
    },
    getArtistRelated: function getArtistRelated(id) {
      return _this.request(_this.apiURL + "/artists/" + id + "/related-artists");
    }
  };
}