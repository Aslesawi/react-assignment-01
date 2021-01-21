import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

      

<div class="card text-center">
  <div class="card-header">
    <Header/>
  </div>
  <div class="card-body">
    
<Body/>
    
  </div>
  <div class="card-footer text-muted">
   <Footer/>
  </div>
</div>
    
    </div>
  );
}

export default App;
