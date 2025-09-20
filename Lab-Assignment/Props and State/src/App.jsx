import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <UserCard name="Soheb" age={23} location="Silvassa" />
      <UserCard name="Harish" age={35} location="Silvassa" />
      <UserCard name="Nitesh" age={24} location="Silvassa" />

      <hr style={{ margin: '30px 0' }} />
      
      <h1>Interactive Counter</h1>
      <Counter />
    

    </div>

    
  );
}

export default App;