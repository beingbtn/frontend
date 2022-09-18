export {};

const fragment = new URLSearchParams(window.location.hash.slice(1));

const accessTokenFragment = fragment.get('access_token');
const tokenTypeFragment = fragment.get('token_type');
const expiresInFragment = fragment.get('expires_in');
const scopeFragment = fragment.get('scope');
const stateFragment = fragment.get('state');

if (accessTokenFragment && tokenTypeFragment && expiresInFragment && scopeFragment && stateFragment) {
    if (stateFragment === localStorage.getItem('state')) {
        const url = `https://btn.attituding.workers.dev/register?access_token=${accessTokenFragment}`;

        try {
            await fetch(url);

            window.location.replace('/members');
        } catch (error) {
            window.location.replace(`/?error=${(error as Error)?.stack}`);
        }
    } else {
        window.location.replace('https://www.fbi.gov');
    }
} else {
    const scopes = ['identity'].join('%20');
    const clientId = '1021144846909579346';
    const state = window.crypto.randomUUID();
    const url = `https://discord.com/oauth2/authorize?response_type=token&client_id=${clientId}&state=${state}&scope=${scopes}`;
    
    localStorage.setItem('state', window.crypto.randomUUID());

    window.location.replace(url);
}
