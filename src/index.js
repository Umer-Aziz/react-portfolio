import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import UseEffectApi from './components/UseEffect/UseEffectApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Routes>
   <Route exact path='/react-portfolio' element={<App/>}/>
   <Route exact path='/useffectapi' element={<UseEffectApi/>}/>
   </Routes>
 </BrowserRouter>
   );

