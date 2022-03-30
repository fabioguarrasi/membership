import logo from './logo.svg';
import Title from '../Title';
import Navbar from '../Navbar';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Homepage" />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
