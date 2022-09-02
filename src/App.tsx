import './App.css';
import { Button } from './components/html/Button';
import { Input } from './components/html/Input';

function App() {
  return (
    <div className="App">
      <Button variant='primary'>
        Primary button
      </Button>
      <Input />
    </div>
  );
}

export default App;
