import './App.css';
import CharCount from './components/CharCount';
import GetCharValue from './components/GetCharValue';
import {RecoilRoot} from 'recoil'; //RecoilRoot is used for wrapping other components and elements

function App() {
  return (
    <div className="App">
      <RecoilRoot>
   <CharCount/>
   <GetCharValue/>
   </RecoilRoot>
    </div>
  );
}

export default App;
