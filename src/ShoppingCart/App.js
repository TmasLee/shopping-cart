import React, { Component } from 'react';
import './App.css';
import ItemTable from './ItemTable';
import PriceConfirmation from '../PriceConfirmation/PriceConfirmation';
import Help from './Help';

class App extends Component {
  state = {
    items: sampleItems,
  }

  removeItem = (style_num) => {
    this.setState((prevState)=>({
      items: prevState.items.filter(item => item.style_num !== style_num)
    }));
  }

  changeSize = (e, style_num) => {
    this.editData(e,style_num, 'size')();
  }

  changeQty = (e, style_num) => {
    this.editData(e,style_num, 'qty')();
  }

  /** 
   * Factory Function because same logic for changing qty and size.
   */  
  editData = (e, style_num, dataType) => {
    return () => {
      e.preventDefault();
      let itemsCopy = [...this.state.items];
      for (let i=0; i<itemsCopy.length; i++){
        if (itemsCopy[i].style_num === style_num){
          itemsCopy[i][dataType] = e.target.value
        }
      }
      this.setState({items: itemsCopy});
    }
  }

  render() {
    const {items} = this.state;

    return (
      <div className='Background'>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">YOUR SHOPPING CART</h1>
            <p className='Empty-Cart'>
              If the cart is completely empty then we shall again add back the products for you
            </p>
          </header>
          <ItemTable 
            items={items}
            removeItem={this.removeItem}
            changeSize={this.changeSize}
            changeQty={this.changeQty}
          />
          <div className='Bottom'>
            <Help />
            <PriceConfirmation items={items}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const sampleItems = [
  {
    url: 'https://gear.blizzard.com/media/catalog/product/cache//550x550/a4e40ebdc3e371adff845072e1c73f37/o/v/overwatch-long-sleeve-shirt.png',
    name: 'Shirt 1',
    style_num: '1111111',
    color: 'white',
    size: 'S',
    qty: 1,
    price: 10.99
  },
  {
    url: 'https://images-na.ssl-images-amazon.com/images/I/91MR26Sa4zL._UL1500_.jpg',
    name: 'Shirt 2',
    style_num: '1111112',
    color: 'turquoise',
    size: 'M',
    qty: 2,
    price: 16.99
  },
  {
    url: 'http://www.sunprecautions.com/content/images/products/17100-3(prlgv)(studio)_900x1200.jpg',
    name: 'Shirt 3',
    style_num: '1111113',
    color: 'blue',
    size: 'L',
    qty: 1,
    price: 20.99,
    discountPrice: 9.99
  },
  {
    url: 'https://static4.cilory.com/273124-large_default/nologo-navy-casual-shirt.jpg',
    name: 'Shirt 4',
    style_num: '1111114',
    color: 'blue',
    size: 'XS',
    qty: 3,
    price: 21.99
  }
];