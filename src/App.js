import './css/App.css';
import Noeud1 from './components/Noeud1';
import Noeud2 from './components/Noeud2';
import Noeud3 from './components/Noeud3'


function App() {
  
  return (
    <div>
      
      <div  className='Digi-header'>
      <Noeud1 />
      </div>
      <div className='Digi-main'>
      <Noeud2 />
      </div>
      <div className='Digi-footer'>
      <Noeud3 />
      </div>
     
      
    </div>
  );
}

export default App;