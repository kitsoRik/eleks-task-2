import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./catalog-item.scss";

export default class CatalogItem extends Component {


     render() {
          
          const { id, name } = this.props;
          const { onSelectedBeer } = this.props;
          return (
               <Link className="catalog-item" to={`/catalog/${id}`}>
                    { name }
               </Link>
          );
     }
}