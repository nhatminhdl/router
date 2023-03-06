import { Outlet } from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <div className='app-header'>
      <Header/>

      </div>
      <div className='app-content'></div>
      <Outlet/>
    </div>
  );
}

export default App;
