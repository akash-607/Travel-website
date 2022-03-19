import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/products' exact component={Products} />
          <Route path='/services' exact component={Services} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;