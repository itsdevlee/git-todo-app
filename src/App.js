import { useMemo } from "react";
import ProcessBar from "./components/ProcessBar";
import SubmitTodo from "./components/SubmitToDo";
import TodoList from "./components/TodoList";

function App() {
  const date = new Date();
  const today = new Intl.DateTimeFormat("ko-KR").format(date);
  useMemo(() => {}, [date, today]);

  return (
    <div>
      <h1>{today} Todos</h1>
      {/* 입력할 Input */}
      <SubmitTodo />
      {/* Todo ProcessBar */}
      <ProcessBar />
      <hr />
      {/* 해야 할 일 */}

      <TodoList />
      {/* 완료한 일 */}
      <TodoList />
    </div>
  );
}

export default App;
