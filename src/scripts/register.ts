export {};

const form = document.getElementById('form') as HTMLFormElement;
const username = document.getElementById('username') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const output = document.getElementById('output') as HTMLSpanElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log(username.value, password.value);

    try {
        await fetch(`https://btn.attitduing.workers.dev/register?username=${username.value}&password=${password.value}`);
    } catch (error) {
        output.textContent = (error as Error)?.message;
    }
});