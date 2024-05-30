import './App.css';
import Messages from './Messages.js';

const messages = ['Привет', 'Чё, как?', 'Всё норм!'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Messages messages={messages}></Messages>
      </header>
    </div>
  );
}

export default App;
