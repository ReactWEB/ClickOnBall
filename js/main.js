const ball = document.querySelector('.main__ball');
const btn = document.querySelector('.manage__btn');
const score = document.querySelector('.manage__field');
const square = document.querySelector('.main');
let max = square.width;
let min = square.height;

const random = (min, max) => {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};
random();

const moveBall = () => {

};

//1. Construct random moving the ball after click on button 'Start!';
//2. If click on the ball:
//2.1 - the ball change himself color from green to red;
//2.2 - score++;
//3 - If the ball 10 times clicked - alert: 'You win!';