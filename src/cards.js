const cardBg = [
    { bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { bgClass: 'bg-gradient-to-r from-green-400 to-blue-600' },
    { bgClass: 'bg-gradient-to-r from-yellow-400 to-red-500' },
    { bgClass: 'bg-gradient-to-r from-orange-400 to-amber-600' },
    { bgClass: 'bg-gradient-to-r from-blue-500 to-indigo-700' },
    { bgClass: 'bg-gradient-to-r from-teal-400 to-lime-500' },
    { bgClass: 'bg-gradient-to-r from-rose-500 to-fuchsia-600' },
    { bgClass: 'bg-gradient-to-r from-cyan-500 to-blue-700' },
    { bgClass: 'bg-gradient-to-r from-emerald-400 to-teal-600' },
    { bgClass: 'bg-gradient-to-r from-indigo-500 to-purple-700' },
    { bgClass: 'bg-gradient-to-r from-black to-gray-700' },
];

const fonts = [
    { fontClass: 'font-berkshire-swash' },
    { fontClass: 'font-dancing-script' },
    { fontClass: 'font-great-vibes' },
    { fontClass: 'font-gurajada' },
    { fontClass: 'font-montserrat-alternates' },
    { fontClass: 'font-pacifico' },
    { fontClass: 'font-playfair-display' },
    { fontClass: 'font-satisfy' },
    { fontClass: 'font-bodoni-moda' }
]

const fontColors = [
    { fontColor: 'bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-green-300 to-teal-400 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-pink-200 to-rose-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-light-blue-200 to-light-blue-300 bg-clip-text text-transparent' },
    { fontColor: 'bg-gradient-to-r from-fuchsia-200 to-rose-200 bg-clip-text text-transparent' }
];

const diwaliWishes = [
    { line: 'May the light of Diwali fill your home with peace and joy.' },
    { line: 'Wishing you a Diwali full of sweets, lights, and laughter.' },
    { line: 'May this Diwali bring you happiness, prosperity, and good health.' },
    { line: 'Let the festivities of Diwali bring you closer to your loved ones.' },
    { line: 'Wishing you a Diwali that brings new happiness, new goals, and new achievements.' },
    { line: 'May the joy and light of Diwali shine brightly in your life.' },
    { line: 'On this auspicious occasion of Diwali, may you be blessed with success and happiness.' },
    { line: 'May the festival of lights illuminate your life with joy and contentment.' },
    { line: 'Wishing you a year filled with the blessings of happiness and peace.' },
    { line: 'May the spirit of Diwali bring you closer to those you cherish.' }
];

const icons = [
    { 
        name: 'candles',
        path: '../public/images/cards/icons/candles.png'
    },
    { 
        name: 'decoration',
        path: '../public/images/cards/icons/decoration.png'
    },
    { 
        name: 'fireworks_1',
        path: '../public/images/cards/icons/fireworks_1.png'
    },
    { 
        name: 'fireworks_2',
        path: '../public/images/cards/icons/fireworks_2.png'
    },
    { 
        name: 'gift_1',
        path: '../public/images/cards/icons/gift_1.png'
    },
    { 
        name: 'gift_2',
        path: '../public/images/cards/icons/gift_2.png'
    },
    { 
        name: 'lantern',
        path: '../public/images/cards/icons/lantern.png'
    },
    { 
        name: 'lotus',
        path: '../public/images/cards/icons/lotus.png'
    },
    { 
        name: 'rangoli_1',
        path: '../public/images/cards/icons/rangoli_1.png'
    },
    { 
        name: 'rangoli_2',
        path: '../public/images/cards/icons/rangoli_2.png'
    },
    { 
        name: 'rangoli_3',
        path: '../public/images/cards/icons/rangoli_3.png'
    },
]

const bgImages = [
    { 
        name: 'bg_1',
        path: '../public/images/cards/bg-images/bg_1.jpg'
    },
]


// Select a random background image path and apply it to the element with ID 'bg-image'
const bgImage = bgImages[Math.floor(Math.random() * bgImages.length)].path;
document.getElementById('bg-image').insertAdjacentHTML('beforeend', `
    <img src="${bgImage}" style="width: 100%; height: 100%; object-fit: cover;" alt="">
`);

// Select a random background class and apply it to the element with ID 'card-bg'
const randomBg = cardBg[Math.floor(Math.random() * cardBg.length)].bgClass;
document.getElementById('card-bg').classList.add(...randomBg.split(" "));

// Select a random font color and apply it to the element with ID 'font-color'
const randomFontColor = fontColors[Math.floor(Math.random() * fontColors.length)].fontColor;
document.getElementById('card-font-color').classList.add(...randomFontColor.split(" "));

// Select a random background class and apply it to the element with ID 'card-bg'
const fontFamily = fonts[Math.floor(Math.random() * fonts.length)].fontClass;
document.getElementById('card-title').classList.add(...fontFamily.split(" "));

// Select a random wish
const diwaliWish = diwaliWishes[Math.floor(Math.random() * diwaliWishes.length)].line;
const formattedWish = diwaliWish.split(" ").map(word => `<span>${word}</span>`).join(" ");
document.getElementById('card-description').innerHTML = formattedWish;

// Select a random background class and apply it to the element with ID 'card-bg'
const subFontFamily = fonts[Math.floor(Math.random() * fonts.length)].fontClass;
document.getElementById('card-subtitle').classList.add(...subFontFamily.split(" "));

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 4; i++) {
    const cardBg = document.getElementById('card-bg');
    const icon = icons[Math.floor(Math.random() * fonts.length)];

    let top, left;
    switch (i) {
        case 0:
            top = cardBg.offsetHeight - cardBg.offsetHeight * ( getRandomInt(75,80) / 100);
            left = cardBg.offsetWidth - cardBg.offsetWidth * ( getRandomInt(75,80) / 100);            
            break;
        case 1:
            top = cardBg.offsetHeight - cardBg.offsetHeight * ( getRandomInt(20,35) / 100);
            left = cardBg.offsetWidth - cardBg.offsetWidth * ( getRandomInt(75,80) / 100);              
            break;
        case 2:
            top = cardBg.offsetHeight - cardBg.offsetHeight * ( getRandomInt(75,80) / 100);
            left = cardBg.offsetWidth - cardBg.offsetWidth * ( getRandomInt(20,35) / 100);  
            break;
        case 3:
            top = cardBg.offsetHeight - cardBg.offsetHeight * ( getRandomInt(20,35) / 100);
            left = cardBg.offsetWidth - cardBg.offsetWidth * ( getRandomInt(20,35) / 100);            
            break;
    
        default:
            break;
    }
    document.getElementById('card-bg').insertAdjacentHTML('beforeend', `
        <div class="absolute z-40 effect" style="top: ${top}px; left: ${left}px;">
            <img src="${icon.path}" width="${ cardBg.offsetWidth > 768 ? getRandomInt(60,90) :  getRandomInt(24,32) }" alt="">
        </div>
    `);
}

const downloadCard = () => {
    const node = document.getElementById('card-bg');

    domtoimage.toPng(node)
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'card.png';
            link.click();
        })
        .catch((error) => {
            console.error('Oops, something went wrong!', error);
        });
};