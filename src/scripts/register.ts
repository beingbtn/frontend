const scopes = ['identity'].join('%20');
const clientId = '1021144846909579346';
const state = window.crypto.randomUUID();
const url = `https://discord.com/oauth2/authorize?response_type=token&client_id=${clientId}&state=${state}&scope=${scopes}`;

localStorage.setItem('state', window.crypto.randomUUID());

window.location.replace(url);
