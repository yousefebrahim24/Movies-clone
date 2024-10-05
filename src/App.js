import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navBar';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Shows from './Components/Shows';
import ComingSoon from './Components/Coming';
import DisplayMovie from './Components/Display';
import Footer from './Components/Footer';
import SignUp from './Components/Auth/SignUp';
import Login from './Components/Auth/Login';
import ProtectedRoute from './Components/Auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />}  />
          <Route path='/Home' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
          <Route path='/Movies' element={<ProtectedRoute><Movies /></ProtectedRoute>} />
          <Route path='/Shows' element={<ProtectedRoute><Shows /></ProtectedRoute>} />
          <Route path='/ComingSoon' element={<ProtectedRoute><ComingSoon/></ProtectedRoute>} />
          <Route path='/DisplayMovie/:id' element={<ProtectedRoute><DisplayMovie /></ProtectedRoute>} />
         
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
