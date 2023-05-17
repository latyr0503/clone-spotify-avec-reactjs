import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Sidebarre from './components/Sidebarre/Sidebarre';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebarre/>
      <Dashboard/>
    </div>
  );
}

export default App;
