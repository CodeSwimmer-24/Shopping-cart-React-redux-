import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Headers from "./container/Header";
import ProductComponents from './container/ProductComponents';
import ProductDetails from './container/ProductDetails';
import ProductListining from './container/ProductListining';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product/:productId">
          <ProductDetails />
          </Route>
          <Route path="/">
          <Headers />
          <ProductListining />
          <ProductComponents />
          </Route>
        </Switch>
        </Router>
   
    </div>
  );
}

export default App;
