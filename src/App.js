/* eslint-disable no-undef */
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Single from './views/Single';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </Router>
  );
};

export default App;
