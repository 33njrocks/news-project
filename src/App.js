
import './App.css';
import Login from './components/Login';
import NewsAticles from './components/NewsAticles';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/news" element={<NewsAticles></NewsAticles>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
