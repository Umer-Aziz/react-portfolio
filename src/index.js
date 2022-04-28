import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import UseEffectApi from './components/UseEffect/UseEffectApi';
import ComA from './components/useContext/ComA';
import ReactToastify from './components/React-toastify/ReactToastify';
import Todo from './components/Todo/Todo';
import TodoLocal from './components/Todo/TodoLocal';
import Gallery from './components/FilterItem/Gallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <Routes>
   <Route exact path='/react-portfolio' element={<App/>}/>
   <Route exact path='/useffectapi' element={<UseEffectApi/>}/>
   <Route exact path='/useContext' element={<ComA/>}/>
   <Route exact path='/reactToastify' element={<ReactToastify/>}/>
   <Route exact path='/todoapp' element={<Todo/>}/>
   <Route exact path='/todoapplocal' element={<TodoLocal/>}/>
   <Route exact path='/filter' element={<Gallery/>}/>
   </Routes>
 </BrowserRouter>
   );

