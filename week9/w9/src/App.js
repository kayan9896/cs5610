import Header from "./component/header";
import TasksList from "./component/tasklist";


function App() {
  const nameq='me';
  return (
    <div className="App">
      <Header name={nameq} />
      {Header('iii')}
      <ul>
        <TasksList/>
      </ul>
    </div>
  )
}


export default App;
