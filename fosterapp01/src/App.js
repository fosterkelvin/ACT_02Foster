import './App.css';
import Color from './myComp/bgcolor';
import Counter from './myComp/counter';
import Footer from './myComp/footer';
import Main from './myComp/main';
import Navbar from './myComp/navbar';
import Reference from './myComp/reference';

function App() {
  return (
    <div className=" text-center">
      <header>
        <Navbar/>
      </header>
      <hr></hr>
      <div>
        <Color/>
        <Counter/>
        <Main/>
      </div>
      <div>
        <Reference/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
