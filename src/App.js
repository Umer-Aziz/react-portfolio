import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import store from './store/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/react-portfolio' element={<Home/>}>Home</Route>
          <Route path='/cart' element={<Cart/>}>Cart</Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App