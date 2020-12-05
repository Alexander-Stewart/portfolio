import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MyNavBar from './components/MyNavBar.js'
import About from './components/About.js'
import AlexRoom from './components/AlexRoom.js'
import Art from './components/Art.js'
import Work from './components/Work.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <Router>
      <div>
        <MyNavBar/>
        <Switch>
          <Route path="/" exact component={Work}/>
          <Route path="/art" component={Art}/>
          <Route path="/about" component={About}/>
          <Route path="/alexs-room" component={AlexRoom}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
