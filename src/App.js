import './App.css';
import Card from './component/Card';
import Directions from './component/Directions';
import Ingredients from './component/Ingredients';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Ingredients />
      <Directions />
    </div>
  );
}

export default App;
