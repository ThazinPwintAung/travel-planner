import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/searchpage' exact component={SearchPage} />
        </Switch>
      </Router>
  );
}

export default App;
