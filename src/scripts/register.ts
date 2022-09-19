export {};

const fragment = new URLSearchParams(window.location.hash.slice(1));

const accessTokenFragment = fragment.get('access_token');
const tokenTypeFragment = fragment.get('token_type');
const expiresInFragment = fragment.get('expires_in');
const scopeFragment = fragment.get('scope');
const stateFragment = fragment.get('state');

if (
    accessTokenFragment &&
    tokenTypeFragment &&
    expiresInFragment &&
    scopeFragment &&
    stateFragment
) {
    if (stateFragment === localStorage.getItem('state')) {
        try {
            await fetch(
                `https://btn.attituding.workers.dev/member?access_token=${accessTokenFragment}&token_type=${tokenTypeFragment}`, {
                    method: 'POST'
                },
            );

            window.location.href = '/members';
        } catch (error) {
            window.location.href = `/?error=${error}+${(error as Error)?.stack}`;
        }
    } else {
        window.location.href = 'https://www.fbi.gov';
    }
} else {
    const scopes = ['identify'].join('%20');
    const clientId = '1021144846909579346';
    const state = window.crypto.randomUUID();
    const url = `https://discord.com/oauth2/authorize?response_type=token&client_id=${clientId}&state=${state}&scope=${scopes}&redirect_uri=https%3A%2F%2Fbtn.attituding.live%2Fregister`;

    localStorage.setItem('state', state);

    window.location.href = url;
}
