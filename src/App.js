import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './home';
import Translator from './Translator';
import Registration from './registration';
import History from './history';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Registration/>}/>
          <Route exact path='/login' element={<Home/>}/>
          <Route exact path='/translator' element={<Translator/>}/>
          <Route exact path='/history' element={<History/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
