const clockDate = document.querySelector('.clock__date');
const clockTime = document.querySelector('.clock__time');

const getClock = () => {
  const clock = new Date();

  const year = String(clock.getFullYear()).padStart(2, '0');
  const month = String(clock.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(clock.getDate()).padStart(2, '0');

  const hours = String(clock.getHours()).padStart(2, '0');
  const minutes = String(clock.getMinutes()).padStart(2, '0');
  const seconds = String(clock.getSeconds()).padStart(2, '0');

  clockDate.innerText = `${year}년 ${month}월 ${dayOfMonth}일`;
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();
setInterval(getClock, 1000);
