const counter = () => {
  const futureDate = new Date(`october 25,2022 5:30:00`).getTime();
  const today = new Date().getTime();
  const gap = futureDate - today;

  // * convert into seconds

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // * dividing  gap%/day then remainer/hour

  const daysText = Math.floor(gap / day);
  const hoursText = Math.floor((gap % day) / hour);
  const minutesText = Math.floor((gap % hour) / minute);
  const secondsText = Math.floor((gap % minute) / second);

  // *! Add into dom
  document.querySelector(".day-num").innerText = daysText;
  document.querySelector(".hour-num").innerText = hoursText;
  document.querySelector(".minutes-num").innerText = minutesText;
  document.querySelector(".seconds-num").innerText = secondsText;
};

setInterval(counter, 1000);
