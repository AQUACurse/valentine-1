import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const imageDisplay = document.getElementById('imageDisplay');
const valentineQuestion = document.getElementById('valentineQuestion');
const responseButtons = document.getElementById('responseButtons');

let noClickCount = 0;
const imagePaths = [
    'image1.gif',
    'image2.gif',
    'image3.gif',
    'image4.gif',
    'image5.gif',
    'sadAnya1.gif',
    'image7.gif'
];
const noButtonTexts = [
    'No',
    'Are you sure?',
    'Pookie please',
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry..."
];

noButton.addEventListener('click', () => {
    if (noClickCount < noButtonTexts.length - 1) {
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount];
        const scaleFactor = 1 + noClickCount * 0.1;
        yesButton.style.transform = `scale(${scaleFactor})`;
        noButton.textContent = noButtonTexts[noClickCount];
    }
});

yesButton.addEventListener('click', () => {
    imageDisplay.src = imagePaths[imagePaths.length - 1];
    valentineQuestion.innerHTML = 'Yayyy!! :3 <br> I love you';
    responseButtons.style.display = 'none';
    confetti();
});
