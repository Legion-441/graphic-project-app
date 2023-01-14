import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './views/blog/blog';
import HomeView from './views/home/home';
import InspirationGallery from './views/inspiration-gallery/inspiration-gallery';
import MainView from './views/main/main';
import NotFound from './views/not-found/not-found';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainView />}>
          <Route index element={<HomeView />} />
          <Route path='inspirationgallery' element={<InspirationGallery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;