
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
         <Route exact path='/'>
            <Home></Home>
         </Route>
         <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/team/:teamId'>
            <TeamDetails></TeamDetails>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
