import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import Card from './components/Card/Card';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let textLogo = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { textLogo }
        </p>
      </header>
      < Test />
      <div className='container'>
        <div className='row'>
          < Card />
        </div>
      </div>
    </div>
  );
}

export default App;
