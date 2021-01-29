import './App.css';
import 'animate.css';
import Home from './containers/Home';
import Projects from './components/Projects';
import About from './components/About'
import Articles from './components/Articles';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './containers/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
            <div>
              <NavBar />
                <Switch>
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Articles" component={Articles} />
                </Switch>
            </div>
        </Router>
        <Home />
      </div>
  );
}

export default App;
