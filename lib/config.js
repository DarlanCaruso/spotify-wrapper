'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = exports.API_URL = 'https://api.spotify.com/v1';
var API_TOKEN = exports.API_TOKEN = 'BQAcNynlCx-bOixhXqHlfmW_hKgKV3MC5ov99zX0De5UTYMhsEPj479edbS7VHfB71a2sMLeIpVgUiqSHsWWqpps8D7n3HoDZe1P0c_tQgDu1ygBo3OpANqm_Lm44Vq9KhDLEC0Bw2IIQX91';
var HEADERS = exports.HEADERS = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer ' + API_TOKEN
  }
};