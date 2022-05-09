import './assets/css/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import TripsListPage from "./pages/TripsListPage/TripsListPage.js";
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage.js';
import LoginPage from "./pages/LoginPage/LoginPage.js";
import AdminHomePage from "./pages/AdminHomePage/AdminHomePage.js";
import CreateTripPage from "./pages/CreateTripPage/CreateTripPage.js";
import TripDetailsPage from "./pages/TripDetailsPage/TripDetailsPage.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='tripslist' element={<TripsListPage/>}/>
        <Route path='application' element={<ApplicationFormPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path=':user/home' element={<AdminHomePage/>}/>
        <Route path=':user/createtrip' element={<CreateTripPage/>}/>
        <Route path=':user/tripdetail' element={<TripDetailsPage/>}/>
        <Route path='*' element={<><h1>404, sua página não foi encontrada, tente de novo em alguns instantes...</h1></>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  </>,
  rootElement  
);