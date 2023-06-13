let isRunning = false;
let stopwatchIntervalID;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchTime;

const startButton = document.querySelector('.js-start-button')

startButton.addEventListener('click', () => {
  if(isRunning) {
    isRunning = false;
    startButton.innerHTML = 'Start';
    clearInterval(stopwatchIntervalID);
  } else {
    isRunning = true;
    startButton.innerHTML = 'Stop';
    stopwatchIntervalID = setInterval(() => {
      stopwatchSeconds += 1;
      if(stopwatchSeconds === 60) {
        stopwatchSeconds = 0;
        stopwatchMinutes += 1;
      }

      if(stopwatchSeconds < 10 && stopwatchMinutes < 10) {
        stopwatchTime = `0${stopwatchMinutes}:0${stopwatchSeconds}`
      } else if (stopwatchMinutes < 10) {
        stopwatchTime = `0${stopwatchMinutes}:${stopwatchSeconds}`
      } else {
        stopwatchTime = `${stopwatchMinutes}:${stopwatchSeconds}`
      }

      document.querySelector('.js-stopwatch-text')
        .innerHTML = stopwatchTime;
    }, 1000)
  }
});
  
const resetButton = document.querySelector('.js-reset-button')
  
resetButton.addEventListener('click', () => {
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  startButton.innerHTML = 'Start';
  document.querySelector('.js-stopwatch-text')
    .innerHTML = '00:00';
  clearInterval(stopwatchIntervalID);
});