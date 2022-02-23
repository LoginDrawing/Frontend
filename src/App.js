import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Header from './component/layout/header'
import Footer from './component/layout/footer'
import Home from './component/home/home'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
