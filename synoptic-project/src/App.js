import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import ChatbotComponent from './Components/Chatbot/Chatbot';

import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/">
						<div className="app-Content" data-testid="app">
							<ChatbotComponent/>
						</div>
					</Route>
					<Route path="About" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
