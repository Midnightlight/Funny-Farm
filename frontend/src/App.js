import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ProductList from "./ProductList";
import Product from "./Product";
import SellerForm from "./SellerForm";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      {/*<Product title="FUNNY FARM, Shopping Time Is Funny Time!!!"/>*/}
      {/*  <SellerForm />*/}


      <HomePage />

       {/*<Router>*/}
            {/*<div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Find product</Link>
                        </li>
                        <li>
                            <Link to="/seller">Post product</Link>
                        </li>
                    </ul>
                </nav>*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                {/*<Switch>
                    <Route path="/seller">
                        <SellerForm />
                    </Route>
                    <Route path="/product/:id" component={Product} />
                    <Route path="/">
                        <ProductList />
                    </Route>
                </Switch>*/}
            {/*</div>*/}
        {/*</Router>*/}

    </div>
  );
}

export default App;