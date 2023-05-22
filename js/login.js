const LoginFormElement = document.querySelector('#Loginform'); // 로그인 폼 요소를 선택하여 loginFormElement 변수에 할당
const UsernameInput = document.querySelector('#Loginform input'); // 로그인 폼 내의 input 요소를 선택하여 usernameInput 변수에 할당
const NameForm = document.querySelector('#Nameform'); // 인사 메시지를 표시할 요소를 선택하여 greeting 변수에 할당

const Hidden_Classname = 'Hidden'; // CSS 클래스 이름을 상수로 정의하여 재사용
const Username_Key = 'Username'; // 로컬 스토리지에서 사용자 이름을 저장할 때 사용할 키 이름을 상수로 정의

const SavedUsername = localStorage.getItem(Username_Key); // 로컬 스토리지에서 사용자 이름 가져오기

// 로그인 폼 제출 이벤트를 처리하는 함수
const handleLoginSubmit = (event) => {
  event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  LoginFormElement.classList.add(Hidden_Classname); // 로그인 폼 숨기기
  const username = UsernameInput.value; // 사용자가 입력한 사용자 이름 값
  localStorage.setItem(Username_Key, username); // 로컬 스토리지에 사용자 이름 저장
  ShowNameing(); // 인사 메시지 표시 함수 호출
};

const ShowNameing = () => {
  // 인사 메시지를 표시하는 함수
  const SavedUsername = localStorage.getItem(Username_Key); // 로컬 스토리지에서 사용자 이름 가져오기
  NameForm.innerText = `${SavedUsername}님의 ToDoList`; // 인사 메시지 업데이트
  NameForm.classList.remove(Hidden_Classname); // 인사 메시지 표시
};

if (SavedUsername === null) {
  // 사용자 이름이 없을 경우
  LoginFormElement.classList.remove(Hidden_Classname); // 로그인 폼 표시
  LoginFormElement.addEventListener('submit', handleLoginSubmit); // 로그인 폼 제출 이벤트 리스너 등록
} else {
  // 사용자 이름이 있는 경우
  ShowNameing(); // 인사 메시지 표시
}
