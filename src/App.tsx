import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { TodoItem } from "./components/TodoItem/TodoItem";

export interface TodoModel {
  id: number;
  title: string;
  description: string | "";
  status: "active" | "completed";
}

function App() {

  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <div>
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {/* These are here just to show the structure of the list items
    List items should get the class `editing` when editing and `completed` when marked as completed */}
            <TodoItem/>
          </ul>
        </div>
      </section>
      <Footer />
      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </section>
  );
}

export default App;
