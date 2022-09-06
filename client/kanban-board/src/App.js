import "./App.css";
import Input from "./components/Input";
import Kanban from "./components/kanban";
function App() {
  return (
    <div style={{ padding: "30px" }}>
      <Input />
      <Kanban />
    </div>
  );
}

export default App;
