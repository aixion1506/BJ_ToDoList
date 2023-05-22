// 이미지 파일 이름을 담은 배열
const Images = ['cat1.jpg', 'dog1.jpg'];
// 배열에서 랜덤으로 이미지 선택
const RandomImage = Images[Math.floor(Math.random() * Images.length)];
// 선택된 이미지로 배경 이미지 URL 생성
const Background = `url(img/${RandomImage})`;

// 배경화면 랜덤 함수
const RandomBackground = () => {
  // body 요소의 배경 이미지로 설정
  document.body.style.backgroundImage = Background;
};

// 초기에 한 번 배경 이미지 설정
RandomBackground();
// 1초마다 배경 이미지 업데이트
setInterval(RandomBackground, 1000);
