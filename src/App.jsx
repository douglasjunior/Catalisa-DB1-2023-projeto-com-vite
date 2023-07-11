import { HashRouter, Link, Route, Routes } from 'react-router-dom';

import Tarefas from './pages/Tarefas';
import Inicial from './pages/Inicial';
import Sobre from './pages/Sobre';
import Heroi from './pages/Heroi';

function App() {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/">Inicial</Link></li>
        <li><Link to="/tarefas">Tarefas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>

        <li><Link to="/heroi/strange">Doctor Strange</Link></li>
        <li><Link to="/heroi/captain">Steve Rogers</Link></li>
        <li><Link to="/heroi/ironman">Tony Stark</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/tarefas' element={<Tarefas />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/heroi/:heroiId' element={<Heroi />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
