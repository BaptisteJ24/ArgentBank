import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
