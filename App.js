import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoContextProvider from "./TodoContextProvider";

function App() {

  return (
    <div>
      <Header />
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  );
}
export default App;