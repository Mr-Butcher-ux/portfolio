
import './App.scss';
import {HashRouter as Router,Route} from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Router>
    </>
    
  );
}

export default App;
