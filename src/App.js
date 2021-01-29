import './App.css';
import 'animate.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About'
import Articles from './components/Articles';
import Home from './containers/Home';
import NavBar from './containers/NavBar';
import Particles from 'react-particles-js';
import Projects from './components/Projects';


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
        <div className="scale-in-center" id="home">
          <Home />
        </div>
        <Particles id="particles-js"
        params={{
          particles: {
            number: {
              value: 400,
              density: {
              enable: true,
              value_area: 1000
              }
            },
            color: {
                value: '#fff'
            },
            opacity: {
                value: 0.5,
                anim: {
                    enable: true
                }
            },
            size: {
                value: 7,
                random: true,
                anim: {
                    enable: true,
                    speed: 3
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                speed: 0.2
            }
          }
        }}
      />
      </div>
  );
}

export default App;
