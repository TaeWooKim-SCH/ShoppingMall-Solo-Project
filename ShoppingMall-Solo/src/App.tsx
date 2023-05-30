import {useEffect} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Login from './pages/Login/Login';
import Main from './pages/main/Main';
import Header from './components/Header';
import { setData } from './modules/apidataSlice';


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
    .then(res => res.json())
    .then(data => {
      dispatch(setData(data));
    })
  }, [])

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  )
}

export default App;


