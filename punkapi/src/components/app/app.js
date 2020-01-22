import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Catalog from '../catalog'
import CatalogElement from '../catalog/catalog-element'

export default class App extends Component {

     render() {
          
          const catalog = () => <Catalog />;
          return (
               <div>
                    <Router>
                         <Route path="/" render={() => <Link to="/catalog">Catalog</Link>} exact/>
                         <Route path="/catalog" component={catalog} exact />
                         <Route path="/catalog/:id" component={(props) => <CatalogElement {...props}/>} exact />
                    </Router>
               </div>
          );
     }
}