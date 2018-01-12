# Spotify Wrapper

[![Build Status](https://travis-ci.org/DarlanCaruso/spotify-wrapper.svg?branch=master)](https://travis-ci.org/DarlanCaruso/spotify-wrapper) [![Coverage Status](https://coveralls.io/repos/github/DarlanCaruso/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/DarlanCaruso/spotify-wrapper?branch=master)

A uma aplicação que utiliza a [Spotify Web API](https://developer.spotify.com/web-api/)

## Suporte aos Browsers

Essa biblioteca utiliza o [Fetch API](https://fetch.spec.whatwg.org/). E esta API é suportada nos seguintes browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependências

Essa biblioteca depende do [fetch](https://fetch.spec.whatwg.org/) para fazer requisições na API Spotify. Para ambientes que não suportam a tecnologia fetch, você precisa prover um [polyfill](https://github.com/github/fetch) para o navegador ou [polyfill](https://github.com/bitinn/node-fetch) para o Node.

## Instalação

```sh
$ npm install js-spotify-wrapper --save
```
## Como utilizar

### ES6

```js
// para importar a biblioteca
import SpotifyWrapper from 'js-spotify-wrapper';
```

### CommonJS

```js
var spotifyWrapper = require('js-spotify-wrapper');
```

### UMD in Browser

```html
<!-- para importar a versão não-minificada -->
<script src="spotify-wrapper.umd.js"></script>

<!-- para importar a versão minificada -->
<script src="spotify-wrapper.umd.min.js"></script>
```

Após isto, a API ficará disponível pelo nome de SpotifyWrapper.
Para utilizar a API é necessário um token que pode ser gerado [aqui](https://developer.spotify.com/web-api/console/get-search-item/). O token expira a cada duas horas. Como mostra o exemplo:

```js
const spotify = new SpotifyWrapper({
  token: 'Seu token gerado aqui'
});
const albums = spotify.search.searchAlbums('Artista escolhido');
```

## Metódos

> Confira os métodos que a biblioteca disponibiliza

## Search

Os metódos *search* ficam disponíveis pelo atributo 'search'.

```js
const spotify = new SpotifyWrapper({
  token: 'Seu token gerado aqui'
});
const albums = spotify.search.metodoEscolhido();
```

### searchAlbums(query)

> Pesquise por Albums. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *album*.

**Argumentos**

| Argumento | Tipo    | Opções                    |
|-----------|---------|---------------------------|
|`query`    |*string* | 'Pesquise qualquer coisa' |

**Exemplo**

```js
searchAlbums('Veil of Maya')
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### searchArtists(query)

> Pesquise por Artistas. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *artist*.

**Argumentos**

| Argumento | Tipo    | Opções                    |
|-----------|---------|---------------------------|
|`query`    |*string* | 'Pesquise qualquer coisa' |

**Exemplo**

```js
searchArtists('Veil of Maya')
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### searchTracks(query)

> Pesquise por Faixas. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *track*.

**Argumentos**

| Argumento | Tipo    | Opções                    |
|-----------|---------|---------------------------|
|`query`    |*string* | 'Pesquise qualquer coisa' |

**Exemplo**

```js
searchTracks('Veil of Maya')
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### searchPlaylists(query)

> Pesquise por Playlists. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *playlist*.

**Argumentos**

| Argumento | Tipo    | Opções                    |
|-----------|---------|---------------------------|
|`query`    |*string* | 'Pesquise qualquer coisa' |

**Exemplo**

```js
searchPlaylists('Veil of Maya')
  .then(data => {
    // faça o que quiser com o resultado
  })
```

## Albums

Os metódos *album* ficam disponíveis pelo atributo 'album'.

```js
const spotify = new SpotifyWrapper({
  token: 'Seu token gerado aqui'
});
const albums = spotify.album.metodoEscolhido();
```

### getAlbum(id)

> Retorne um album especifico informando o id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Argumentos**

| Argumento | Tipo    | Opções            |
|-----------|---------|-------------------|
|`id`       |*string* | 'Id especifico'   |

**Exemplo**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // faça o que quiser com resultado
  })
```

### getAlbums(ids)

> Retorne vários albums especificos informando seus id's Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Argumentos**

| Argumento | Tipo              | Opções            |
|-----------|-------------------|-------------------|
|`ids`      |*Array de Strings* | ['id1', 'id2']    |

**Exemplo**

```js
getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### getAlbumTracks(id)

> Retorne a faixas de um album especifico informando o id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Argumentos**

| Argumento | Tipo    | Opções              |
|-----------|---------|---------------------|
|`id`       |*string* | 'Id especifico'     |

**Exemplo**

```js
getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // faça o que quiser com o resultado
  })
```

## Artists

Os metódos de *artist* ficam disponíveis pelo atributo 'artist'.

```js
const spotify = new SpotifyWrapper({
  token: 'Seu token gerado aqui'
});
const artists = spotify.artist.metodoEscolhido();
```

### getArtist(id)

> Retorne um artista especifico informando o id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-artist/).

**Argumentos**

| Argumento | Tipo    | Opções            |
|-----------|---------|-------------------|
|`id`       |*string* | 'Id especifico'   |

**Exemplo**

```js
getArtist('0TnOYISbd1XYRBk9myaseg')
  .then(data => {
    // faça o que quiser com resultado
  })
```

### getArtists(ids)

> Retorne vários artistas especificos informando seus id's. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-artists/).

**Argumentos**

| Argumento | Tipo              | Opções            |
|-----------|-------------------|-------------------|
|`ids`      |*Array de Strings* | ['id1', 'id2']    |

**Exemplo**

```js
getArtists(['2CIMQHirSU0MQqyYHq0eOx','57dN52uHvrHOxijzpIgu3E','1vCWHaC5f2uS3yhpwWbIA6'])
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### getArtistAlbums(id, tipo)

> Retorne todos os albums de um determinado artista informando o id. É possível escolher o tipo de album que deseja receber. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-artist-albums/).

**Argumentos**

| Argumento | Tipo    | Opções                                                     |
|-----------|---------|------------------------------------------------------------|
|`id`       |*string* | 'Id especifico'                                            |
|`tipo`     |*string* | 'Tipo de dado (single, album, appears_on, compilation)'    |

**Exemplo**

```js
getArtistAlbums('0TnOYISbd1XYRBk9myaseg', 'single')
  .then(data => {
    // faça o que quiser com resultado
  })
```

### getArtistTopTracks(id)

> Retorne o top 10 de um determinado artista informando o id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-artist-top-tracks/).

**Argumentos**

| Argumento | Tipo    | Opções            |
|-----------|---------|-------------------|
|`id`       |*string* | 'Id especifico'   |

**Exemplo**

```js
getArtistTopTracks('0TnOYISbd1XYRBk9myaseg')
  .then(data => {
    // faça o que quiser com resultado
  })
```

### getArtistRelated(id)

> Retorne os artistas relacionados. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-artist-related-artists/).

**Argumentos**

| Argumento | Tipo    | Opções            |
|-----------|---------|-------------------|
|`id`       |*string* | 'Id especifico'   |

**Exemplo**

```js
getArtistRelated('0TnOYISbd1XYRBk9myaseg')
  .then(data => {
    // faça o que quiser com resultado
  })
```

## Contribuições

Por favor leia [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) para detalhes sobre nosso código de conduta.

## Versionamento

Nós usamos [SemVer](http://semver.org/) para o versionamento. Para ver as versões disponíveis, visite as [tags deste repositorio](https://github.com/DarlanCaruso/spotify-wrapper/tags).

## Autores

| ![Darlan Caruso](https://avatars3.githubusercontent.com/u/5831230?s=460&v=4)|
|:---------------------:|
|  [Darlan Caruso](https://github.com/darlancaruso/)   |

Veja também a lista de [contribuidores](https://github.com/willianjusten/spotify-wrapper/contributors) que participaram deste projeto.

## Licença

Este projeto foi licenciado sobre o MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
