const firecrackers = [
    {
        id: 1,
        name: '500',
        icon: '../public/images/firecrackers/500.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 2,
        name: 'Anar',
        icon: '../public/images/firecrackers/anar.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 3,
        name: 'Chakri',
        icon: '../public/images/firecrackers/chakri.png',
        effect: '../public/images/firecrackers/chakri.gif'
    },
    {
        id: 4,
        name: 'Ladi',
        icon: '../public/images/firecrackers/ladi.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 5,
        name: 'Sky Shots',
        icon: '../public/images/firecrackers/sky_shot.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 6,
        name: 'Fulzadi',
        icon: '../public/images/firecrackers/fulzadi.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 7,
        name: 'Sutli',
        icon: '../public/images/firecrackers/sutli.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
    {
        id: 8,
        name: 'Mirchi',
        icon: '../public/images/firecrackers/mirchi.png',
        effect: '../public/images/firecrackers/firecracker.gif'
    },
];
const modal = document.getElementById('modal');

const showModal = (frkId) => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    const firecracker = firecrackers.find((firecracker) => firecracker.id === frkId);

    const width = modal.offsetWidth
    const height = modal.offsetHeight
    const count = sessionStorage.getItem(firecracker.id) ?? 1;
    document.querySelectorAll('.effect').forEach(element => element.remove());
    for (let i = 1; i <= count; i++) {
        let top = getRandomInt(0,height);
        let left = getRandomInt(0,width);
        modal.insertAdjacentHTML('beforeend', `
            <div class="absolute z-50 effect" style="top: ${top}px; left: ${left}px;">
                <img src="${firecracker.effect}" width="64" alt="">
            </div>
        `);
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const hideModal = () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

const incrementSessionCount = (inputId) => {
    const input = document.getElementById(inputId);
    let count = parseInt(input.value); // Ensure count is a number
    count++;
    input.value = count;
    sessionStorage.setItem(inputId, count);
}

const decrementSessionCount = (inputId) => {
    const input = document.getElementById(inputId);
    let count = parseInt(input.value); // Ensure count is a number
    if (count > 1) {
        count--;
        input.value = count;
        sessionStorage.setItem(inputId, count);
    }
}

firecrackers.forEach((value) => {
    const inputId = `${value.id}`;
    const count = sessionStorage.getItem(inputId) ?? 1;
    document.getElementById('firecrackers').insertAdjacentHTML('beforeend', `
        <div class="bg-gray-400 rounded-lg shadow-md shadow-gray-700 flex flex-col gap-3 items-center p-5">
            <div class="bg-gray-300 p-5 rounded-xl" onclick="showModal(${value.id})">
                <img src="${value.icon}" width="64" alt="">
            </div>
            <h3 class="font-semibold text-gray-100 text-xl">${value.name}</h3>
            <div class="flex gap-3">
                <button class="text-center text-gray-300" onclick="decrementSessionCount('${inputId}')">
                    <i class="fa-solid fa-circle-minus text-xl"></i>
                </button>
                <input class="border-0 w-full text-center rounded-xl" id="${inputId}" value="${count}" type="number" min="1">
                <button class="text-center text-gray-300" onclick="incrementSessionCount('${inputId}')">
                    <i class="fa-solid fa-circle-plus text-xl"></i>
                </button>
            </div>
        </div>
    `);
});
