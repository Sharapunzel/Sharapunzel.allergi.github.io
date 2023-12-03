import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";


function App(){
  return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/Detail" element={<DetailPage/>}/>
        </Routes>
      </BrowserRouter> );
}
export default App;
