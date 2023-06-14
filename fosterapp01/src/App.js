import './App.css';
import Footer from './myComp/footer';
import Main from './myComp/main';
import Navbar from './myComp/navbar';

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "gray" }}>
      <navbar>
        <Navbar/>
      </navbar>
      <div className="container">
        <br></br><br></br><br></br><br></br>
        <Main/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
