
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Usuarios from './Usuarios';
import Posts from './Posts';
import Albumes from './Albumes';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/albums" element={<Albumes />} />
    </Routes>
  </Router>
);

export default App;
