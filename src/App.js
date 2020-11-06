import React from 'react';
import {Container} from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import TopHeader from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'
import BlogPage from './pages/blogs/blogs.component';
import AddBlog from './pages/add-blog/add-blog.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <div className="App">
        
        <TopHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blogs" component={BlogPage} />
          <Route exact path="/blogs/add" component={AddBlog} />
        </Switch>
      </div>
   
    
  );
}

export default App;
