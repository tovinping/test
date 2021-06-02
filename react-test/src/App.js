import './App.css';
import { Model } from './Components/Dialog';
import AntTable from './Components/AntTable'

function App() {
  return (
    <div className="App">
      <AntTable />
      <div>
        <button>dialog</button>
      </div>
      <div>
        <Model />
      </div>
    </div>
  );
}

export default App;
