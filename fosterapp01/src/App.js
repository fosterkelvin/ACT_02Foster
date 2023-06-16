import './App.css';
import Footer from './myComp/footer';
import Main from './myComp/main';
import Navbar from './myComp/navbar';
import Reference from './myComp/reference';

function App() {
  return (
    <div className=" text-center text-bg-dark">
      <header>
        <Navbar/>
      </header>
      <hr></hr>
      <div>
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
