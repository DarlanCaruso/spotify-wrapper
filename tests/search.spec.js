import chai, { expect } from 'chai';
global.fetch = require('node-fetch');

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import { searchAll, searchAlbums, searchArtists, searchPlaylists, searchTracks } from '../src/search';

describe('Search', () => {
  let fetchStub;
  let promise;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });
  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke Tests', () => {
    // Search All
    it('should exists method searchAll', () => {
      expect(searchAll).to.exist;
    });
    // Search Albums
    it('should exists method searchAlbums', () => {
      expect(searchAlbums).to.exist;
    });
    // Search Artists
    it('should exists method searchArtists', () => {
      expect(searchArtists).to.exist;
    });
    // Search Tracks
    it('should exists method searchTracks', () => {
      expect(searchTracks).to.exist;
    });
    // Search Playlists
    it('should exists method searchTracks', () => {
      expect(searchTracks).to.exist;
    });
  });

  describe('Search all', () => {
    it('should call fetch function', () => {
      const artists = searchAll('Godsmack', 'artist');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      context('passing only one type', () => {
        const artists = searchAll('Veil of Maya', 'artist');
        expect(fetchStub).to.have.be
          .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=artist');
        const albums = searchAll('Incubus', 'album');
        expect(fetchStub).to.have.be
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        const double = searchAll('Veil of Maya', ['artist', 'album']);
        expect(fetchStub).to.have.be
          .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=artist,album');
      });
    });

    it('should the promise return data in JSON format', () => {
      promise.resolves({ body: 'json' });
      const artists = searchAll('Veil of Maya', 'artist');
      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('Search Artists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const artists = searchArtists('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=artist');
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const albums = searchAlbums('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=album');
    });
  });

  describe('Search Tracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const tracks = searchTracks('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=track');
    });
  });

  describe('Search Playlists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Godsmack');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should call the correct URL when fetch', () => {
      const playlists = searchPlaylists('Veil of Maya');
      expect(fetchStub).to.have.be
        .calledWith('https://api.spotify.com/v1/search?q=Veil+of+Maya&type=playlist');
    });
  });
});
