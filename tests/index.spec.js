import chai, { expect } from 'chai';
global.fetch = require('node-fetch');

import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('should create a new instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.instanceOf(SpotifyWrapper);
  });
  it('shoul recieve a custom API URL', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'foo'
    });
    expect(spotify.apiURL).to.be.equal('foo');
  });
  it('shoul recieve a default API URL if this parameter is not passed', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });
  it('shoul recieve a custom token parameter', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo'
    }); 
    expect(spotify.token).to.be.equal('foo');
  });
  
  describe('Request Method', () => {
    let fetchStub;
    let promise;
    beforeEach(() => {
      fetchStub = sinon.stub(global, 'fetch');
      promise = fetchStub.returnsPromise();
    });
    afterEach(() => {
      fetchStub.restore();
    });

    it('should exists the request method', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });
    it('should fetch be called one time', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(fetchStub).to.have.been.calledOnce;
    });
    it('should fetch be called with correct URL', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(fetchStub).to.have.been.calledWith('url');
    });
    it('should fetch be called with correct headers', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo'
      });
      const headers = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer foo`,
        },
      };
      spotify.request('url');
      expect(fetchStub).to.have.been.calledWith('url', headers);
    });
  });
});