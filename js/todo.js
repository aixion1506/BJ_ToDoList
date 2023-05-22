/** TodoForm, TodoInput, TodoList
 * @type {HTMLFormElement}
 */
const TodoForm = document.getElementById('Todo-Form');
const TodoInput = TodoForm.querySelector('input');
const TodoList = document.getElementById('Todo-List');

/**  로컬스토리지에서 TodoList 식별키
 * @type { string }
 * 변수 Todos_Key "todos" 할당
 */
const Todos_Key = 'todos';

/** TodoList 목록 저장하는 배열
 *
 * 변수 toDos선언과 빈배열로 초기화ㅈ
 */
let Todos = [];

/**
 * TodoList를 로컬스토리지에 저장
 */
const SavingTodos = () => {
  // Todos_Key 식별후, 변수 Todos를 json으로 전달후 로컬스토리지에 저장
  localStorage.setItem(Todos_Key, JSON.stringify(Todos));
};

/**
 * TodoList 삭제
 * @param {event} - 클릭 이벤트 객체
 */
const DeleteTodo = (event) => {
  // 변수 li에 이벤트타깃요소와 부모요소를 할당
  const li = event.target.parentElement;
  // 클릭시 li요소 삭제
  li.remove();
  // Todos를 필터링, todo.id와 li.id가 불일치하는 요소를 배제
  Todos = Todos.filter((todo) => todo.id !== parseInt(li.id));
  // 해당 함수 호출후 삭제된 목록 반영해 로컬스토리지에 저장
  SavingTodos();
};

/**
 * 새로운 TodoList 추가
 * @param {object} newTodo - 새로운 TodoList 객체
 * @param {string} newTodo.text - TodoList 내용
 * @param {number} newTodo.id - TodoList ID
 */
const paintTodo = (newTodo) => {
  //변수li에 'li'요소를 추가
  const li = document.createElement('li');
  // li의 id에 newTodo의 id를 할당
  li.id = newTodo.id;
  // 변수 const에 'Button'요소를 추가
  const Button = document.createElement('button');
  // 버튼의 innerText에 'X'를 할당
  Button.innerText = '❌';
  //변수 span에 'span'요소를 추가
  const span = document.createElement('span');
  //span의 innerText에 newTodo의 text할당
  span.innerText = newTodo.text;
  //Button에 EventListener추가, 클릭시 DeleteTodo함수 실행
  Button.addEventListener('click', DeleteTodo);
  //li의 자식요소에 Button을 추가
  li.appendChild(Button);
  //li의 자식요소에 span을 추가
  li.appendChild(span);
  //TodoList의 자식요소에 li를 추가
  TodoList.appendChild(li);
};

/**
 * TodoList 입력 제출 이벤트 처리
 * @param {Event} event - 폼 이벤트 처리 객체
 */
const HandleTodoSubmit = (event) => {
  //  이벤트 실행시 재로드 방지
  event.preventDefault();
  // 변수 NewTodo에 TodoInput의 값 할당
  const NewTodo = TodoInput.value;
  //TodoInput의의 값을 빈문자열로 초기화
  TodoInput.value = '';
  // 변수 newTodoObj선언과 text와 id의 값을 할당
  const NewTodoObj = {
    text: NewTodo,
    id: Date.now(),
  };
  //Todos에 NewTodoObj에 추가
  Todos.push(NewTodoObj);
  // 함수 paintToDo호출후 NewTodoObj를 인수로 실행
  paintTodo(NewTodoObj);
  //업데이트된 내용을 SavingTodos저장
  SavingTodos();
};

//TodoForm의 이벤트리스너 추가와 제출시 HandleTodoSubmit함수 실행
TodoForm.addEventListener('submit', HandleTodoSubmit);

/**
 * 로컬스토리지에서 TodoList 목록 가져오기
 * @type {string|null}
 * 변수 TodoDatas에 로컬스토리지의 Todos_Key 할당
 */
const TodoDatas = localStorage.getItem(Todos_Key);
//TodoDatas의 값이 null이 아닌경우
if (TodoDatas !== null) {
  //변수 ParsedTodos에  json형식의 TodoDatas을 js로 추가
  const ParsedTodos = JSON.parse(TodoDatas);
  //Todos에 ParsedTodos값 할당
  Todos = ParsedTodos;
  //ParsedTodos의 각요소에 paintToDo함수 실행
  ParsedTodos.forEach(paintTodo);
}
