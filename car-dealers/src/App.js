import React from 'react'
import Login from './components/authenitication/login';
import Signup from './components/authenitication/signup';
import Wishlist from './components/navbar/wishlist';
import Appointment from './components/navbar/appointment';
import About from './components/navbar/about';
import Footer from './components/navbar/Footer';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <HomePage />
        <Switch>
          <Route exact path='/wishlist'>
            <wishlist />
          </Route>
          <Route exact path='/appointment'>
            <Appointment />
          </Route>
        
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/wishlist'>
            <Wishlist/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='Footer/'>
            <Footer />
          </Route>
        </Switch>
        <footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
