import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { Header } from './components/Header';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path=''>
      <Route path='' element={<Home />} />
      <Route path='/details' element={<Details />} />
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
