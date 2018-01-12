import chai, { expect } from 'chai';
global.fetch = require('node-fetch');

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import SpotifyWrapper from '../src/index';

describe('Artist', () => {
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

  describe('Smoke tests', () => {
    it('should exists the method getArtist', () => {
      expect(spotify.artist.getArtist).to.exist;
    });
    it('should exists the method getArtists', () => {
      expect(spotify.artist.getArtists).to.exist;
    });
    it('should exists the method getArtistAlbums', () => {
      expect(spotify.artist.getArtistAlbums).to.exist;
    });
    it('should exists the method getArtistTopTracks', () => {
      expect(spotify.artist.getArtistTopTracks).to.exist;
    });
    it('should exists the method getArtistRelated', () => {
      expect(spotify.artist.getArtistRelated).to.exist;
    });
  });

  describe(`Get Artist`, () => {
    it('should method fetch be called one time', () => {
      const artist = spotify.artist.getArtist('');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should method fetch be called with correct URL', () => {
      const artist = spotify.artist.getArtist('0TnOYISbd1XYRBk9myaseg');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg');
    });
    it('should method fetch return a data in format JSON', () => {
      promise.resolves({body: 'json'});
      const artist = spotify.artist.getArtist('0TnOYISbd1XYRBk9myaseg');
      expect(artist.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe(`Get Artists`, () => {
    it('should method fetch be called one time', () => {
      const artists = spotify.artist.getArtists('');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should method fetch be called with correct URL', () => {
      const artists = spotify.artist.getArtists(['2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6']);
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6');
    });
    it('should method fetch return a data in format JSON', () => {
      promise.resolves({body: 'json'});
      const artists = spotify.artist.getArtists(['2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6']);
      expect(artists.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe(`Get Artist Album`, () => {
    it('should method fetch be called one time', () => {
      const artistAlbum = spotify.artist.getArtistAlbums('');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should method fetch be called with correct URL', () => {
      const artistAlbum = spotify.artist.getArtistAlbums('2CIMQHirSU0MQqyYHq0eOx');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/albums');
    });
    it('should method fetch be called with correct URL with type parameter', () => {
      const artistAlbum = spotify.artist.getArtistAlbums('2CIMQHirSU0MQqyYHq0eOx', 'single');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/albums?album_type=single');
    });
    it('should method fetch return a data in format JSON', () => {
      promise.resolves({body: 'json'});
      const artistAlbum = spotify.artist.getArtistAlbums('2CIMQHirSU0MQqyYHq0eOx', 'single');
      expect(artistAlbum.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe(`Get Artist Top Tracks`, () => {
    it('should method fetch be called one time', () => {
      const artistTopTracks = spotify.artist.getArtistTopTracks('');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should method fetch be called with correct URL', () => {
      const artistTopTracks = spotify.artist.getArtistTopTracks('0TnOYISbd1XYRBk9myaseg');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks');
    });
    it('should method fetch return a data in format JSON', () => {
      promise.resolves({body: 'json'});
      const artistTopTracks = spotify.artist.getArtistTopTracks('0TnOYISbd1XYRBk9myaseg');
      expect(artistTopTracks.resolveValue).to.be.eql({body: 'json'});
    });
  });

  describe(`Get Artist Related Artists`, () => {
    it('should method fetch be called one time', () => {
      const artistRelated = spotify.artist.getArtistRelated('');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should method fetch be called with correct URL', () => {
      const artistRelated = spotify.artist.getArtistRelated('0TnOYISbd1XYRBk9myaseg');
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists');
    });
    it('should method fetch return a data in format JSON', () => {
      promise.resolves({body: 'json'});
      const artistRelated = spotify.artist.getArtistRelated('0TnOYISbd1XYRBk9myaseg');
      expect(artistRelated.resolveValue).to.be.eql({body: 'json'});
    });
  });
});