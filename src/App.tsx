import React, { FC } from 'react';
import 'flexboxgrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import Home from './pages/Home';
import Post from './pages/Post';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Post/:idPost">
          <Post />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
