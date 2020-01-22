export default class Punkapi {

     static _url = "https://api.punkapi.com/v2";

     static async getAllBeers() {
          const res = await fetch(`${this._url}/beers`);
          const body = res.json();
          
          return body;
     }
     
     static async getBeerById(id) {
          const res = await fetch(`${this._url}/beers/${id}`);
          const body = res.json();
          
          return body;
     }
}