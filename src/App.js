import {Route, Routes, Router} from 'react-router-dom';
import './App.css';
// import MediaTable from './components/MediaTable';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
