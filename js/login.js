const loginFormElement = document.querySelector('#login-form'); // 로그인 폼 요소를 선택하여 loginFormElement 변수에 할당
const usernameInput = document.querySelector('#login-form input'); // 로그인 폼 내의 input 요소를 선택하여 usernameInput 변수에 할당
const greeting = document.querySelector('#greeting'); // 인사 메시지를 표시할 요소를 선택하여 greeting 변수에 할당

const HIDDEN_CLASSNAME = 'hidden'; // CSS 클래스 이름을 상수로 정의하여 재사용
const USERNAME_KEY = 'username'; // 로컬 스토리지에서 사용자 이름을 저장할 때 사용할 키 이름을 상수로 정의

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 사용자 이름 가져오기

// 로그인 폼 제출 이벤트를 처리하는 함수
const handleLoginSubmit = (event) => {
  event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  loginFormElement.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
  const username = usernameInput.value; // 사용자가 입력한 사용자 이름 값
  localStorage.setItem(USERNAME_KEY, username); // 로컬 스토리지에 사용자 이름 저장
  showGreetings(); // 인사 메시지 표시 함수 호출
};

const showGreetings = () => {
  // 인사 메시지를 표시하는 함수
  const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 사용자 이름 가져오기
  greeting.innerText = `${savedUsername}님의 ToDoList`; // 인사 메시지 업데이트
  greeting.classList.remove(HIDDEN_CLASSNAME); // 인사 메시지 표시
};

if (savedUsername === null) {
  // 사용자 이름이 없을 경우
  loginFormElement.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 표시
  loginFormElement.addEventListener('submit', handleLoginSubmit); // 로그인 폼 제출 이벤트 리스너 등록
} else {
  // 사용자 이름이 있는 경우
  showGreetings(); // 인사 메시지 표시
}
