import React from 'react';
import { Header } from './components/Header';
import { Results } from './components/Results';
import { HeroDetail } from './pages/HeroDetail';
import { CominSoon } from './components/CominSoon';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/search" element={
            <Results/>
        }/>
        <Route path="/heroes" element={
            <Results/>
        }/>
        <Route path="/comics" element={
            <CominSoon/>
        }/>
        <Route path="/events" element={
            <CominSoon/>
        }/>
        <Route path="/heroes/:heroid" element={
            <HeroDetail/>
        }/>
        <Route path="/" element={
            <Results/>
        }/>
        <Route path="/login" element={
            <CominSoon/>
        }/>
        <Route path="/register" element={
            <CominSoon/>
        }/>
      </Routes>
    </Router>
  );
}
