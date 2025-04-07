import logo from "./logo.svg";
import "./App.css";

function App() {
  const tasks = [
    {
      name: "task1",
      completed: true,
    },
    {
      name: "task2",
      completed: true,
    },
    {
      name: "task3",
      completed: false,
    },
  ];
  return (
    <div className="App">
      <ul>
        {tasks.map((task) => (
          <li>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
