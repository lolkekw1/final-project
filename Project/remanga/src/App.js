import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MangaCatalogPage from './components/MangaCatalog/MangaCatalogPage';
import Carousel from './components/Carousel/Carousel';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Main from './components/main/main';
import MangaPage from './components/MangaPage/MangaPage';
import Profile from './components/Profile/Profile';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div>
        <Header loggedInUser={loggedInUser} />
        <Routes>
          <Route path="/News" element={<News />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<MangaCatalogPage />} />
          <Route path="/popular" element={<Carousel />} />
          <Route path="/main" element={<Main />} />
          <Route path="/manga/:id" element={<MangaPage />} />
          <Route path="/profile" element={<Profile loggedInUser={loggedInUser} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
