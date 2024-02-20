import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Login } from './Authentication/LoginSignUp';
import { Navbar } from './NavbarComponents/Navbar';
import { HomePage } from './BodyComponents/HomePage/HomePage';
import { EssentialsProvider } from './Context/EssentialsProvider';
import { CreatePostModal } from './BodyComponents/HomePage/CreatePostModal';
import { MainPage } from './MainPage';
import { SearchPage } from './BodyComponents/SearchPage/SearchPage';
import { ProfilePage } from './BodyComponents/ProfilePage/ProfilePage';
import { PageCreate } from './BodyComponents/Page/PageCreate';
import { PageInfo } from './BodyComponents/Page/PageInfo';
import { AuthNavigator } from './Authentication/AuthNavigator';

function App() {
  return (
    <div className="App">
      <EssentialsProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/createpost' element={<CreatePostModal />} />
          {/*<Route path='/' element={<AuthNavigator><Navbar /></AuthNavigator>} />*/}
          <Route path='/mainpage' element={<MainPage />} >
            <Route path='homepage' element={<HomePage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path="pagecreate" element={<PageCreate />} />
            <Route path='pageinfo' element={<PageInfo/>} />
          </Route>
        </Routes>
      </EssentialsProvider>
    </div>
  );
}

export default App;
