import './App.css';
import ListTask from './component/ListTask';
import AddTask from './component/AddTask';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AddTask/>
      <ListTask />
      
      </header>
    </div>
  );
}

export default App;
