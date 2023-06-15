import './App.css';
import Footer from './myComp/footer';
import Main from './myComp/main';
import Navbar from './myComp/navbar';
import Reference from './myComp/reference';

function App() {
  return (
    <div className=" text-center text-bg-dark">
      <header className="mb-auto ">
        <Navbar/>
      </header>
      <br></br>
      <hr></hr>
      <div>
        <Main/>
      </div>
      <div className="">
        <Reference/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
