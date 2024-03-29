import React from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Card from './Pages/Card/Card';
import Footer from './Component/footer/footer'
import {Route} from 'react-router-dom';
import Catalog from './Pages/Catalog/Catalog'
import ContainerDescriptionProducts from './Component/DescriptionProducts/ContainerDescriptionProducts'
import { connect } from 'react-redux';
import {sortLowPrice, sortHighPrice, sortDiscount,
   addToCard,addDiscountProducts,addPopularProducts,
   addcurrentProduct,addProducts,HandlerCard, addViewedProducts,
   getCurrentProduct, getProduct, DescriptionHandlerBtn,
   removeProductsFromCard, postOrder, successSend} from './redux/Catalog-reducer'
import PreLoader from './Component/PreLoader/PreLoader'


class App extends React.Component {
  componentDidMount () {
  this.props.getProduct()
  }

  render () {
    return (
      <>
      {this.props.catalog.products
      ? 
      <><div className='wrapper'>
      <Nav card={this.props.catalog.card}/>
       <Route path='/' exact render={() => <Home {...this.props}/>}/>
       <Route path='/catalog' exact render={() => <Catalog {...this.props} />} />
       <Route path="/catalog/:id" render={() => <ContainerDescriptionProducts {...this.props.catalog} getCurrentProduct = {this.props.getCurrentProduct}
       addToCard = {this.props.addToCard}
       DescriptionHandlerBtn = {this.props.DescriptionHandlerBtn}
       HandlerCard = {this.props.HandlerCard} 
       addcurrentProduct={this.props.addcurrentProduct} 
       addViewedProducts={this.props.addViewedProducts}/>} />
       <Route path='/about' render={About} />
       <Route path='/Card' render={() => <Card DataCard= {this.props.catalog.card} removeProductsFromCard = {this.props.removeProductsFromCard} 
       orderData = {this.props.catalog.orderData} postOrder ={this.props.postOrder} successSend={this.props.successSend}
       />} />
      </div>
      <Footer/></>
      : 
      <PreLoader />
      }
      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
      catalog:state.catalogPage,
  }
}

const mapDispatchToProps = {
  sortLowPrice, sortHighPrice, sortDiscount,
   addToCard, addDiscountProducts, addPopularProducts,
   addcurrentProduct, addProducts, HandlerCard,
   addViewedProducts, getCurrentProduct, getProduct,
   DescriptionHandlerBtn,removeProductsFromCard, postOrder, successSend
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
