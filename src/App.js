
import './App.css';
import { Helmet } from 'react-helmet';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Title from './components/Title';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
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
              <Route path='/Smart-House' element={<HomePage />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/mainpage' element={<MainPage />} />
              <Route path='/createroom' element={<CreateRoom />} />
              <Route path='/rooms/:color' element={<Rooms />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
