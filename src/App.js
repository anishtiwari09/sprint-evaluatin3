import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import AllRoutes from './Routers/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
