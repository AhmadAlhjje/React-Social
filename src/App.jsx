import Home from "./page/home/Home";
import Profile from "./page/profile/Profile";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
