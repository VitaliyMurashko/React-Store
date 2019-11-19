import Axios from 'axios';

export const ProductApi = {
   getProducts(){
      return Axios.get('https://react-store-cc102.firebaseio.com/products.json')
   },

   getCurrentProduct(matchParamsId){
      return Axios.get("https://react-store-cc102.firebaseio.com/products/products/" + matchParamsId + ".json")
   }
}

export const SendDataOrder = (jsonData) => {
   return Axios.post(`https://react-store-cc102.firebaseio.com/orders.json`, jsonData)
}