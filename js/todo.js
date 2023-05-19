/** toDoForm, toDoInput, toDoList
 * @type {HTMLFormElement}
 */
const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

/**  로컬스토리지에서 todolist 식별키
 * @type { string }
 * 변수 TODOS_KEY에 "todos" 할당
 */
const TODOS_KEY = 'todos';

/** todolist 목록 저장하는 배열
 * @type {array}
 * 변수 toDos선언과 빈배열로 초기화
 */
const todos = [];

/**
 * todolist를 로컬스토리지에 저장
 */
const saveTodos = () => {
  // TODOS_KEY로 식별후, 변수 toDos를 json으로 전달후 로컬스토리지에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

/**
 * todolist 삭제
 * @param {event} - 클릭 이벤트 객체
 */
const deleteTodo = (event) => {
  // 변수 li에 이벤트타깃요소와 부모요소를 할당
  const li = event.target.parentElement;
  // 클릭시 li요소 삭제
  li.remove();
  // toDos를 필터링, todo.id와 li.id가 불일치하는 요소를 배제
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  // 해당 함수 호출후 삭제된 목록 반영해 로컬스토리지에 저장
  saveTodos();
};

/**
 * 새로운 todolist 추가
 * @param {object} newTodo - 새로운 todolist 객체
 * @param {string} newTodo.text - todolist 내용
 * @param {number} newTodo.id - todolist ID
 */
const paintTodo = (newTodo) => {
  //변수li에 'li'요소를 추가
  const li = document.createElement('li');
  // li의 id에 newTodo의 id를 할당
  li.id = newTodo.id;
  // 변수 const에 'button'요소를 추가
  const button = document.createElement('button');
  // 버튼의 innerText에 'X'를 할당
  button.innerText = '❌';
  //변수 span에 'span'요소를 추가
  const span = document.createElement('span');
  //span의 innerText에 newTodo의 text할당
  span.innerText = newTodo.text;
  //button에 EventListener추가, 클릭시 deleteTodo함수 실행
  button.addEventListener('click', deleteTodo);
  //li의 자식요소에 button을 추가
  li.appendChild(button);
  //li의 자식요소에 span을 추가
  li.appendChild(span);
  //toDoList의 자식요소에 li를 추가
  todoList.appendChild(li);
};

/**
 * todolist 입력 제출 이벤트 처리
 * @param {Event} event - 폼 이벤트 처리 객체
 */
const handleTodoSubmit = (event) => {
  //  이벤트 실행시 재로드 방지
  event.preventDefault();
  // 변수 newTodo에 toDoInput의 값 할당
  const newTodo = todoInput.value;
  //toDoInput의의 값을 빈문자열로 초기화
  todoInput.value = '';
  // 변수 newTodoObj선언과 text와 id의 값을 할당
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  //toDos에 newTodoObj에 추가
  todos.push(newTodoObj);
  // 함수 paintToDo호출후 newTodoObj를 인수로 실행
  paintTodo(newTodoObj);
  //업데이트된 내용을 saveToDos저장
  saveTodos();
};

//toDoForm의 이벤트리스너 추가와 제출시 handleToDoSubmit함수 실행
todoForm.addEventListener('submit', handleTodoSubmit);

/**
 * 로컬스토리지에서 todolist 목록 가져오기
 * @type {string|null}
 * 변수 savedToDos에 로컬스토리지의 TODOS_KEY값을 할당
 */
const savedTodos = localStorage.getItem(TODOS_KEY);
//savedToDos의 값이 null이 아닌경우
if (savedTodos !== null) {
  //변수 parsedToDos에  json형식의 savedToDos을 js로 추가
  const parsedTodos = JSON.parse(savedTodos);
  //toDos에 parsedToDos값 할당
  todos = parsedTodos;
  //parsedToDos의 각요소에 paintToDo함수 실행
  parsedTodos.forEach(paintTodo);
}
