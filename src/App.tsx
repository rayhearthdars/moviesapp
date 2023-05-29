import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import { Header } from './components/Header';
import { Details } from './pages/details/details';
import { HomePage } from './pages/home/Home';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path=''>
      <Route path='' element={<HomePage />} />
      <Route path='/details' element={<Details />} />
    </Route>
  ));
  return (
    <body>
    <RouterProvider router={router}/>
  </body>);
}

export default App;
