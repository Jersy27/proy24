
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Pie } from './components/pie';

import { NavBar1 } from './components/NavBar';
import { Centro } from './components/Centro';

//paginas 
import { Prim } from './components/prim';
import { Seg } from './components/seg';
import { Cuar } from './components/Cuar';
import { Quin} from './components/Quin';
import { Sex } from './components/Sex';
import { Sep } from './components/Sep';

function App() {
  return (
    <div className="App">
       <NavBar1></NavBar1>
        <Centro></Centro>
        <Pie></Pie>
        <Prim></Prim>
        <Seg></Seg>
        <Cuar></Cuar>
        <Quin></Quin>
        <Sex></Sex>
        <Sep></Sep>

    </div>
  );
}

export default App;
