import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Contact from "./pages/Contact/Contact";
import AdminHome from "./pages/Admin/adminHome/adminHome"
import NoPage from "./pages/NoPage";
// import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/About/about';
import Services from './pages/Services/services';
import Registration from './pages/Registration/Registration';
import AdminLayout from './pages/Admin/adminLayout/adminLayout';
import AdminContact from './pages/Admin/adminContact/adminContact';
import AdminAbout from './pages/Admin/adminAbout/adminAbout';
import AdminServices from './pages/Admin/adminServices/adminServices';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

function App(){
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LogIn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path='register' element={< Registration/>}/>
        
        <Route path='adminLayout' element={< AdminLayout/>}>
            <Route path='adminHome' element={< AdminHome/>}/>
            <Route path='adminContact' element={< AdminContact/>}/>
            <Route path='adminAbout' element={< AdminAbout/>}/>
            <Route path='adminServices' element={< AdminServices/>}/>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
