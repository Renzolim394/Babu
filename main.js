// script.js

let currentTextIndex = 0;
const texts = [
    "Hi Babu!",
    "Just wanted to let you know how happy I am that you entered my life and became such an important part of it. Yay english ko yan ah hahah",
    "Thank sa pagsama sakin, sa ups and downs ng buhay. True ba? Di mo nga ata ako chinat, nainit ulo mo, o baka ako? hahaha",
    "Life is a bit busy, busy sa career, finding new job and environment, hopefully babu masettle ko na rin sarili ko para maging at peace na ako sayo.",
    "Please continue praying satin ha...",
    "I love you Iday <3",
    "Happy Valentine's Day!",
    "-Renzo"
];

function changeText() {
  const textContainer = document.getElementById('textContainer');
  textContainer.classList.add('fade-out');
  
  setTimeout(() => {
    document.getElementById('cardText').innerText = texts[currentTextIndex];
    textContainer.classList.remove('fade-out');
    
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }, 500); // Adjust the timeout duration as needed
}
