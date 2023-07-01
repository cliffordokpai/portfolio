import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import TechSummary from './components/TechSummary';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/tech-summary' component={TechSummary} />
          <Route path='/projects' component={Projects} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
