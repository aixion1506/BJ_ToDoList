// 이미지 파일 이름을 담은 배열
const images = ['cat1.jpg', 'dog1.jpg'];
// 배열에서 랜덤으로 이미지 선택
const chosenImage = images[Math.floor(Math.random() * images.length)];
// 선택된 이미지로 배경 이미지 URL 생성
const bgImage = `url(img/${chosenImage})`;

// 배경화면 랜덤 함수
const randomBackground = () => {
  // body 요소의 배경 이미지로 설정
  document.body.style.backgroundImage = bgImage;
};

// 초기에 한 번 배경 이미지 설정
randomBackground();
// 1초마다 배경 이미지 업데이트
setInterval(randomBackground, 1000);
