import {useEffect} from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css'
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Products from './pages/Products/Products';
import Header from './components/Header';
import { setData } from './modules/apidataSlice';
import { setCategory } from './modules/categorySlice';
import ApiDataInterFace from './modules/apidata.interface';


function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
    .then(res => res.json())
    .then(data => {
      data.products.sort((a: ApiDataInterFace, b: ApiDataInterFace) => (
        b.discountPercentage - a.discountPercentage
      )); 
      dispatch(setData(data.products));
      dispatch(setCategory(data.products));
    })
  }, [])

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </>
  )
}

export default App;


