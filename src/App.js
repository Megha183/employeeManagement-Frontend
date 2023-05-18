import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Admin from './components/Admin';
import Edit from './components/Edit';
import PagenotFound from './components/PagenotFound';
import View from './components/View';

function App() {
  return (
    
    <div className="App ">
    <Routes>

    <Route path='/' element={<Admin/>}></Route>
    <Route path='add' element={<Add/>}></Route>
    <Route path='edit/:id' element={<Edit/>}></Route>
    <Route path='view/:id' element={<View/>}></Route>
    <Route path={'*'} element={<PagenotFound></PagenotFound>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
