import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <div className="App">
{/*       <List
        items={['Batman', 'Superman', 'Spiderman']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Dave',
            last: 'Appadoo'
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
