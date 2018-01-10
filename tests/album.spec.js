import chai, { expect } from 'chai';
global.fetch = require('node-fetch');

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';

describe('Album', () => {
  let fetchStub;
  let promise;
  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();
  });
  afterEach(() => {
    fetchStub.restore();
  });

  describe('Smoke tests', () => {
    it('should exists method getAlbum', () => {
      expect(getAlbum).to.exist;
    });
    it('should exists method getAlbum', () => {
      expect(getAlbums).to.exist;
    });
    it('should exists method getAlbumTracks', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('Get Album', () => {
    it('should method fetch be called one time', () => {
      const albums = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should method fetch be called with correct URL', () => {
      const albums = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.be.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');
    });

    it('should method fetch return a data in format JSON', () => {
      promise.resolves({album: 'name'});
      const albums = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(albums.resolveValue).to.be.eql({album: 'name'});
    });
  });

  describe('Get Albums', () => {
    it('should method fetch be called one time', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTi']);
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should method fetch be called with correct URL', () => {
      const albums = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTi']);
      expect(fetchStub).to.have.be.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTi');
    });

    it('should method fetch return a data in format JSON', () => {
      promise.resolves({album: 'name'});
      const albums = getAlbum(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTi']);
      expect(albums.resolveValue).to.be.eql({album: 'name'});
    });
  });

  describe('Get Album Tracks', () => {
    it('should method fetch be called one time', () => {
      const albums = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.been.calledOnce;
    });

    it('should method fetch be called with correct URL', () => {
      const albums = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(fetchStub).to.have.be.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
    });

    it('should method fetch return a data in format JSON', () => {
      promise.resolves({album: 'name'});
      const albums = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(albums.resolveValue).to.be.eql({album: 'name'});
    });
  });
});