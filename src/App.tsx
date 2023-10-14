import "./App.css";
import { getUsers } from "./api/users";
import Table from "./components/Table";

function App() {
  return (
    <>
      <h1>React Pagination</h1>
      <Table users={getUsers()} />
    </>
  );
}

export default App;
