import React from 'react';
import "./App.css"
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './components/Explore';
import SearchPage from './components/SearchPage';
import Carddetail from './components/Carddetail';
import Paga404 from "./components/Paga404";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore/:id" element={<Explore />} />
        <Route exact path="/carddetails/movie" element={<Carddetail />} />
        <Route path="/search/movie" element={<SearchPage />} />
        <Route path="*" element={<Paga404 />} />
      </Routes>
    </Router>
  );
}

export default App;
