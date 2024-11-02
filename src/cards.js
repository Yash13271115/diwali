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


// Select a random background class and apply it to the element with ID 'card-bg'
const randomBg = cardBg[Math.floor(Math.random() * cardBg.length)].bgClass;
document.getElementById('card-bg').classList.add(...randomBg.split(" "));

// Select a random font color and apply it to the element with ID 'font-color'
const randomFontColor = fontColors[Math.floor(Math.random() * fontColors.length)].fontColor;
document.getElementById('card-font-color').classList.add(...randomFontColor.split(" "));

// Select a random background class and apply it to the element with ID 'card-bg'
const fontFamily = fonts[Math.floor(Math.random() * fonts.length)].fontClass;
document.getElementById('card-title').classList.add(...fontFamily.split(" "));

// Select a random background class and apply it to the element with ID 'card-bg'
const subFontFamily = fonts[Math.floor(Math.random() * fonts.length)].fontClass;
document.getElementById('card-subtitle').classList.add(...subFontFamily.split(" "));

// const downloadCard = async () => {
//     try {
//         await html2canvas(document.getElementById("card-bg"), { 
//             backgroundColor: null, // Set background to transparent
//             scale: 2 // Optional: increase scale for better resolution
//         }).then(canvas => {
//             const image = canvas.toDataURL("image/png");
//             const link = document.createElement("a");
//             link.href = image;
//             link.download = "card.png";
//             link.click();
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };


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
