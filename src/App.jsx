import './App.css';
import './Components/StyleSheets/LandingPage.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { Todos } from "./MyComponents/Todos.js";
// import { AddTodo } from "./MyComponents/AddTodo";
// import { About } from "./MyComponents/About/About.js";
// import AdminLog from './MyComponents/Admin/AdminLog';
// import { MailVer } from './MyComponents/Admin/MailVer';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import VideoGallery from './Components/LandingPage/Gallery/VideoGallery/VideoGallery';
import Header from './Components/Common/Header';
import AddUser from './Components/User/AddUser';
import Support from './Components/Support/Support';
import AdminLog from './Components/Admin/AdminLog';
import Footer from './Components/LandingPage/Footer';
import AdminHome from './Components/Admin/AdminHome';
import About from './Components/LandingPage/About';
import News from './Components/LandingPage/News';
import SuccessPage from './Components/User/SuccessPage';
import DistrictSelector from './Components/User/DistrictSelector';
import MandalSelector from './Components/User/MandalSelector';
import VillageSelector from './Components/User/VillageSelector';
import Container from './Components/User/Container';
import PublicImages from './Components/LandingPage/Gallery/PhotoGallery/PublicImages/PublicImages';
import IssuesImages from './Components/LandingPage/Gallery/PhotoGallery/Issues/IssuesImages';
import PartyImages from './Components/LandingPage/Gallery/PhotoGallery/Party/PartyImages';
import EventImages from './Components/LandingPage/Gallery/PhotoGallery/EventImages/EventImages';

// import Home from './MyComponents/Home';
// import UserChoice from './MyComponents/UserChoice';
// import Footer from "./MyComponents/Footer.js";
// import { VideoGallery } from './MyComponents/VideoGallery.js';
// import { IssuesImages } from './MyComponents/Photos/IssuesImages.js';
// import { PartyImages } from './MyComponents/Photos/PartyImages.js';
// import { EventImages } from './MyComponents/Photos/EventImages.js';
// // import { News } from './MyComponents/News/News.js';
// import { AdminPage } from './MyComponents/Admin/AdminPage.js';
// import { AdminPost } from './MyComponents/Admin/AdminPost.js';
// import Dummy from './MyComponents/Dummy.js';


function App() {
 
  return (
    <>
      <Header title={"JanaSena"} searchBar={false}/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path="/videoGallery" element={<VideoGallery />}/>
        <Route exact path='/district' element={<DistrictSelector/>}/>
        <Route exact path='/mandals' element={<MandalSelector/>}/>
        <Route exact path='/villages' element={<VillageSelector/>}/>
        <Route exact path="/signup" element={<AddUser  />}></Route>
        <Route exact path='/support' element={<Support />}></Route>
        <Route exact path='/admin' element={<AdminLog />}></Route>
        <Route exact path="/adminpanel" element={<AdminHome />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/news" element={<News />}></Route>
        <Route exact path="/contact" element={<About />}></Route>
        <Route exact path="/testing" element={<Container />}></Route>
        <Route exact path="/success" element={<SuccessPage />}></Route>
        <Route exact path="/PublicImages" element={<PublicImages />}></Route>
        <Route exact path="/IssuesImages" element={<IssuesImages />}></Route>
        <Route exact path="/PartyImages" element={<PartyImages />}></Route>
        <Route exact path="/EventImages" element={<EventImages />}></Route>


        {/*  <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/verification' element={<MailVer />}></Route>
          <Route exact path="/Adminpanel/joinings" element={<Todos todos={todos} onDelete={onDelete} />}></Route>
          <Route exact path='/Adminpanel/AdminPost' element={<AdminPost />}></Route>
          <Route exact path='/Adminpanel/district' element={<UserChoice />}></Route>
          <Route exact path='/news' element={<VideoGallery />}></Route> */}
      </Routes>
      <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
