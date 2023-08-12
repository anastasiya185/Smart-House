
import './App.css';
import { Helmet } from 'react-helmet';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Title from './components/Title';
import { homePageContext } from './contextAPI';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import { signInContext } from './contextAPI';
import SignUp from './components/SignUp';
import { signUpContext} from './contextAPI';
import MainPage from './components/MainPage';
import {mainPageContext} from './contextAPI'
import { useState } from 'react';
import CreateRoom from './components/CreateRoom';
import Rooms from './components/Rooms';



function App() {




  return (
    <div className="App">
      <Helmet>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Title/>
      <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<homePageContext.Provider>
                   <HomePage/>
                   </homePageContext.Provider>}/>

        <Route
          path='/'
          element={<signInContext.Provider>
                   <SignIn/>
                   </signInContext.Provider>}/>

        <Route
          path='/'
          element={<signUpContext.Provider>
                   <SignUp/>
                   </signUpContext.Provider>}/>
        <Route
          path='/mainpage'
          element={<mainPageContext>
                   <MainPage/>
                  </mainPageContext>}/>
         <Route
          path='/createroom'
          element={<createRoomContext>
                   <CreateRoom/>
                  </createRoomContext>}/>
          <Route
          path='/rooms/:color'
          element={<Rooms/>}/>     


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
