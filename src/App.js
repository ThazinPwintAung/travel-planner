import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
