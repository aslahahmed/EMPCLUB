import './App.css';
import Home from './componenets/Home';
import AddEmployee from './componenets/AddEmployee';
import Edit from './componenets/Edit';
import Header from './componenets/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path='/add' element={<AddEmployee/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
        <Footer/>
      </Router>
      </div>
  )
  
}

export default App;
