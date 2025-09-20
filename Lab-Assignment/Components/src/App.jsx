import './App.css';
import Greeting from './Greeting';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Greeting name="Soheb" />
    </div>
  );
}

export default App;