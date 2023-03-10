const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Апдейтит таймер
const updateTimer = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const hoursStr = hours.toString().padStart(2, '0');
  const minutesStr = minutes.toString().padStart(2, '0');
  const secsStr = secs.toString().padStart(2, '0');

  timerEl.textContent = `${hoursStr}:${minutesStr}:${secsStr}`;
};

// Анимирует таймер
const createTimerAnimator = () => {
  let timerId;

  return (seconds) => {
    clearInterval(timerId);

    timerId = setInterval(() => {
      updateTimer(seconds);

      if (seconds === 0) {
        clearInterval(timerId);
        // alert('Timer has reached 0 seconds left!');
      } else {
        seconds--;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
//Мне очень хотелось добавить звоночек или алерт при окончании таймера, но этого в задании не было, так что я оставил комментом хех