// OpenWeatehr API KEY
const API_KEY = '3e8fecef20315b4c5937a7b88d7302a0';

const OpenWeatehrAPI = (position) => {
  //api 함수선언
  const lat = position.coords.latitude; // api 위도
  const lon = position.coords.longitude; // api 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // api 주소, 받아올 정보
  fetch(url).then((response) =>
    response.json().then((data) => {
      // api 주소를 호출, response는 서버로 응답받는 객체, 서버데이터를 json으로 저장, 변수 data에 json을 사용
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      weather.innerText = `${data.weather[0].main} ${Math.round(
        data.main.temp
      )} 도`; // weather의 innerText에 data에서 가져온 날씨,온도 정보를 표시
      city.innerText = data.name; // city의 innerText에 data의 도시 이름을 할당
    })
  );
};

const API_Error = () => {
  //에러 발생시, 경고문 출력
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(OpenWeatehrAPI, API_Error); // 해당 메서드 호출후, 성공시 onGeoOk, 실패시 onGeoError
