import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Shared/NavBar/NavBar';
import Footer from './Component/Shared/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import LogIn from './Component/Authintication/LogIn/LogIn';
import Books from './Component/Pages/Books/Books';
import News from './Component/Pages/News/News';
import Announcments from './Component/Pages/Announcments/Announcments';
import Videos from './Component/Pages/Videos/Videos';
import Photoes from './Component/Pages/Photoes/Photoes';
import Home from './Component/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import GoTop from './Component/Shared/GoTop';
import AddBooks from './Component/Admin/AddNewItems/AddBooks';
import AddNews from './Component/Admin/AddNewItems/AddNews';
import DashBoard from './Component/Admin/DashBoard/DashBoard';
import AddPhotoes from './Component/Admin/AddNewItems/AddPhotoes';
import AddAnnouncement from './Component/Admin/AddNewItems/AddAnnouncement';
import AddVideos from './Component/Admin/AddNewItems/AddVideos';


function App() {

  return (

    <div className="mx-auto flex flex-col min-h-screen bg-base-100">
      <NavBar />
      <div className="max-w-7xl mx-auto">

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/books" element={<Books />}></Route>
          {/* <Route path="/news" element={<News />}></Route> */}
          <Route path="/announcments" element={<Announcments />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/photoes" element={<Photoes />}></Route>

          <Route path="/dashboard" element={<DashBoard></DashBoard>}>
            <Route path="/dashboard/addbook" element={<AddBooks></AddBooks>}></Route>
            <Route path="/dashboard/addnews" element={<AddNews/>}></Route>
            <Route path="/dashboard/addphoto" element={<AddPhotoes/>}></Route>
            <Route path="/dashboard/adannouncement" element={<AddAnnouncement/>}></Route>
            <Route path="/dashboard/addvideo" element={<AddVideos/>}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>



      </div>
      <GoTop />
      <Footer />
    </div>
  );

}

export default App;
