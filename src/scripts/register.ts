export {};

const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const output = document.getElementById('output') as HTMLSpanElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        output.textContent = '';

        const response = await fetch(
            `https://btn.attituding.workers.dev/register?username=${username.value}&password=${password.value}`,
        );

        const text = await response.text();

        switch (response.status) {
            case 200:
                username.value = '';
                password.value = '';

                window.location.href = '/home';
                break;
            default: 
                output.textContent = text || response.statusText;
        }
    } catch (error) {
        output.textContent = (error as Error)?.message;
    }
});
