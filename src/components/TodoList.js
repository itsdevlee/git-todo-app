import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div>
      <p>할 일</p>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default TodoList;
