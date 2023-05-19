const clockDate = document.querySelector('.clock__date');
const clockTime = document.querySelector('.clock__time');

// 함수 getClock 선언
const getClock = () => {
  const clock = new Date(); // 변수 clock을 new Date로 할당

  // 변수 year에 clock의 현재연도를 가져와서 padStart매서드 문자열 길이를 2로 맞추고 앞자리는 0으로 시작
  const year = String(clock.getFullYear()).padStart(2, '0');
  // 변수 month에 clock의 현재 월을 가져와서 +1을 적용후 사용하며 문자열 길이는 2로 맞추고 앞자리는 0으로 시작
  const month = String(clock.getMonth() + 1).padStart(2, '0');
  // 변수 dayOfMonth clock의 현재 일을 사져와서 문자열 길이는 2로 맞추고 앞자리는 0으로 시작
  const dayOfMonth = String(clock.getDate()).padStart(2, '0');

  // 변수 hours에 clock의 현재 시간을 사져와서 문자열 길이는 2로 맞추고 앞자리는 0으로 시작
  const hours = String(clock.getHours()).padStart(2, '0');
  // 변수 minutes에 clock의 현재 분을 사져와서 문자열 길이는 2로 맞추고 앞자리는 0으로 시작
  const minutes = String(clock.getMinutes()).padStart(2, '0');
  // 변수 seconds에 clock의 현재 초을 사져와서 문자열 길이는 2로 맞추고 앞자리는 0으로 시작
  const seconds = String(clock.getSeconds()).padStart(2, '0');

  // 변수 clockDate 요소 innerText에 년,월,일을 할당
  clockDate.innerText = `${year}년 ${month}월 ${dayOfMonth}일`;
  // 변수 clockTime 요소 innerText에 시간,분,초를 할당
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock(); // 함수 getClock 호출
// 함수 setInterval를 실행시 함수 getClock을 1초마다 반복실행
setInterval(getClock, 1000);
