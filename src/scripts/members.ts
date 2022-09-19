export {};

import type { APIUser } from 'discord-api-types/v10';

const request = await fetch('https://btn.attituding.workers.dev/members');

const users = (await request.json()) as APIUser[];

const memberList = document.getElementById('member-list')!.parentElement!;

users.forEach((user) => {
    const avatarURL = user.avatar
        ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp?size=64`
        : `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`;

    memberList.innerHTML += `<div class="rounded-full bg-light-2 p-4 dark:bg-dark-2">
    <div class="flex items-center gap-4 justify-start w-full h-full">
        <img
            alt="${user.username}#${user.discriminator}'s profile picture"
            class="sm:h-14 sm:w-14 h-12 w-12 select-none rounded-full"
            src="${avatarURL}"
        />
        <span class="h3 truncate">${user.username}#${user.discriminator}</span>
    </div>
</div>`;
});
