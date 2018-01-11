# Spotify Wrapper

[![Build Status](https://travis-ci.org/DarlanCaruso/spotify-wrapper.svg?branch=master)](https://travis-ci.org/DarlanCaruso/spotify-wrapper)

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
// para importar um método especifico
import { method } from 'js-spotify-wrapper';

// para importar tudo
import * as spotifyWrapper from 'js-spotify-wrapper';
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper');
```

### UMD in Browser

```html
<!-- para importar a versão não-minificada -->
<script src="spotify-wrapper.umd.js"></script>

<!-- para importar a versão minificada -->
<script src="spotify-wrapper.umd.min.js"></script>
```

Após isto, a API ficará disponível pelo nome de SpotifyWrapper, como mostra o exemplo:

```js
const albums = spotifyWrapper.searchAlbums('Artista escolhido');
```

## Metódos

> Confira os métodos que a biblioteca disponibiliza

### searchAll(query, tipo)

> Procure por infromações de artistas, albums, faixas e playlists. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/).

**Argumentos**

| Argumento | Tipo              | Opções                                  |
|-----------|-------------------|-----------------------------------------|
|`query`    |*string*           | 'Pesquise qualquer coisa'               |
|`tipo`     |*Array de Strings* | ['artist', 'album', 'track', 'playlist']|

**Exemplo**

```js
search('Veil of Maya', ['artist', 'album'])
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### searchAlbums(query)

> Procure informações sobre Albums. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *album*.

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

> Procure informações sobre Artistas. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *artist*.

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

> Procure informações sobre Faixas. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *track*.

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

> Procure informações sobre Playlists. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) com o tipo definido como *playlist*.

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

### getAlbum(id)

> Procure informações sobre um album especifico com seu determinado id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

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

> Procure informações sobre alguns albuns informando seus determinados id's. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Argumentos**

| Argumento | Tipo              | Opções            |
|-----------|-------------------|-------------------|
|`ids`      |*Array de Strings* | ['id1', 'id2']    |

**Examplo**

```js
getAlbum(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // faça o que quiser com o resultado
  })
```

### getAlbumTracks(id)

> Procure todas as faixas de um album informando seu id. Teste em: [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

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

## Contribuições

Por favor leia [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) para detalhes sobre nosso código de conduta, e o processo para enviar pedidos de commit para nós.

## Versionamento

Nós usamos [SemVer](http://semver.org/) para o versionamento. Para ver as versões disponíveis, visite as [tags deste repositorio](https://github.com/DarlanCaruso/spotify-wrapper/tags).

## Autores

| ![Darlan Caruso](https://avatars3.githubusercontent.com/u/5831230?s=460&v=4)|
|:---------------------:|
|  [Darlan Caruso](https://github.com/darlancaruso/)   |

Veja também a lista de [contribuidores](https://github.com/willianjusten/spotify-wrapper/contributors) que participaram deste projeto.

## Licença

Este projeto foi licenciado sobre o MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
