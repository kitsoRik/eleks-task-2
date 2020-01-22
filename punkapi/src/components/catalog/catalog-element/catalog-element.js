import React, { Component } from 'react';

import "./catalog-element.scss";

import Punkapi from '../../../services/punkapi'

export default class CatalogElement extends Component {

     state = {
          beer: null
     }

     componentDidMount() {
          const { id } = this.props.match.params;
          Punkapi.getBeerById(id)
                    .then((beer) => {
                         this.setState({
                              beer: beer[0]
                         });
                    });
     }

     render() {
          if(!this.state.beer) return (<div>Loading...</div>);
          
          const { name, description, ingredients, image_url, volume } = this.state.beer;

          const { malt, hops, yeast } = ingredients;

          const mattIngredients = malt.map((ing) => 
               <div className="good-ingredient">{ ing.name } {ing.amount.value} {ing.amount.unit}</div>);
          let hopsIngredients = malt.map((ing) => 
               <div className="good-ingredient">{ ing.name } {ing.amount.value} {ing.amount.unit}</div>);
          hopsIngredients.push((() => <div className="good-ingredient">Yeast: { yeast }</div>)());

          return (
               <div className="catalog-element">
                    <div className="photo-ingredients-container">
                         <div className="good-photo-wrapper">
                              <img className="good-photo" src={ image_url } alt="Good photo"/>
                         </div>
                         <div className="good-ingredients-container">
                              <div className="good-ingredients-title">
                                   Malt ingredients
                                   { mattIngredients }
                              </div>
                              <div className="good-ingredients-title">
                                   Hops ingredients
                                   { hopsIngredients }
                              </div>
                              <div className="good-description">
                                   <b>Description: </b>
                                   { description }
                              </div>
                              <div className="good-description">
                                   <b>Volume: </b>
                                   { volume.value } { volume.unit }
                              </div>
                         </div>
                    </div>
               </div>
          );
     }
}