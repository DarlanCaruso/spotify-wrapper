import chai, { expect } from 'chai';
global.fetch = require('node-fetch');

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import SpotifyWrapper from '../src/index';

describe('Search', () => {
  let spotify;
  let fetchStub;
  let promise;
  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });
  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke Tests', () => {
    // Search Albums
    it('should exists method searchAlbums', () => {
      expect(spotify.search.searchAlbums).to.exist;
    });
    // Search Artists
    it('should exists method searchArtists', () => {
      expect(spotify.search.searchArtists).to.exist;
    });
    // Search Tracks
    it('should exists method searchTracks', () => {
      expect(spotify.search.searchTracks).to.exist;
    });
    // Search Playlists
    it('should exists method searchTracks', () => {
      expect(spotify.search.searchTracks).to.exist;
    });
  });

  describe('Search Artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.searchArtists('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const artists = spotify.search.searchArtists('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=artist');
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.searchAlbums('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const albums = spotify.search.searchAlbums('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.searchTracks('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const tracks = spotify.search.searchTracks('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.searchPlaylists('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const playlists = spotify.search.searchPlaylists('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=playlist');
    });
  });
});
