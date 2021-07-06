const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const ref = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
};

class ColorCwitch{
    constructor() {
        this.isActive = false;
        this.intervalId = null;
    }
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
            setColorBody(randomIndex);
        }, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
};

const colorSwitch = new ColorCwitch();


ref.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
ref.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setColorBody(index) {
    ref.body.style.backgroundColor = colors[index];
    console.log(colors[index])
};