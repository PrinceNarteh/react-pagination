import { useState } from "react";
import "./App.css";
import { getUsers } from "./api/users";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  return (
    <>
      <h1>React Pagination</h1>
      <Table users={getUsers({ page, limit })} />
      <Pagination />
    </>
  );
}

export default App;
