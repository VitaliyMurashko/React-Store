import Axios from 'axios';

export const ProductApi = {
   getProducts(){
      return Axios.get('https://react-store-cc102.firebaseio.com/catalog/laptops.json')
   },

   getCurrentProduct(matchParamsId){
      return Axios.get("https://react-store-cc102.firebaseio.com/catalog/laptops/" + matchParamsId + ".json")
   }
}

export const postDataOrder = (jsonData) => {
   return Axios.post(`https://react-store-cc102.firebaseio.com/orders.json`, jsonData)
}

