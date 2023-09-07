import './App.css';
import Accounts from './Components/Accounts/Accounts';
import Dahsboard from './Components/Dashboard/Dahsboard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/navbar';
import Pending from './Components/Pending/Pending';
import Processed from './Components/Processed/Processed';
import Profile from './Components/Profile/Profile';
import Report from './Components/Report/Report';
import Request from './Components/Request/Request';
import RequestInfo from './Components/RequestInfo/RequestInfo';
import RequestSend from './Components/RequestSend/RequestSend';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import HomePage from './Pages/HomePage.js/HomePage';
import LandingPage from './Pages/LandindPage/LandingPage';
import Layout from './Pages/Layout/Layout';
import LoginPage from './Pages/LoginPage/loginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';



const router = createBrowserRouter(
   createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="home" element={<HomePage />}>
        <Route path="Dashboard" element={<Dahsboard/>}/>
        <Route path="Request" element={<Request/>}>
           <Route path="Pending" element={<Pending/>}/>
           <Route path="Processed" element={<Processed/>}/>
           <Route path=":id" element={<RequestInfo/>}/>
           <Route path="send" element={<RequestSend/>}/>
        </Route>
        <Route path="report" element={<Report/>}/>
        <Route path="accounts" element={<Accounts/>}/>
        <Route path="Profile/:id" element={<Profile/>}/>   
        </Route> 
       
      <Route path='*' element={<ErrorPage/>}/>
  </Route>
   )
)
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
