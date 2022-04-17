import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'>{<Home></Home>}</Route>
        <Route path='/login'>{<Login></Login>}</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
