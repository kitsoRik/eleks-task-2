import React, { Component } from 'react'

import CatalogItem from './catalog-item'

import "./catalog.scss"

import Punkapi from '../../services/punkapi'

export default class Catalog extends Component {

     state = {
          beers: []
     }

     componentDidMount() {
          Punkapi.getAllBeers()
                    .then((body) => {
                         this.setState({
                              beers: body
                         });
                    })
     }

     render() {

          const { beers } = this.state;

          if(beers.length === 0) return <div>Loading</div>

          const elements = beers.map((beer) => {
               return (
                    <CatalogItem { ...beer }/>
               )
          });
          
          return (
               <div className="catalog-container">
                    { elements }
               </div>
          );
     }
}