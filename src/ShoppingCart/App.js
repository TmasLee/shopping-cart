import React, { Component } from 'react';
import './App.css';
import ItemTable from './ItemTable';
import PriceConfirmation from '../PriceConfirmation/PriceConfirmation';
import Item from '../Item/Item';
import Help from './Help';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: sampleItems,
    }
    this.itemComponents = [];
    this.state.items.forEach((item,i)=>{
      this.itemComponents.push(
        <Item key={i}
          itemData={item}
          removeItem={this.removeItem}
          changeSize={this.changeSize}
          changeQty={this.changeQty}/>
      );
    });
  }

  removeItem = (style_num) => {
    this.setState((prevState)=>({
      items: prevState.items.filter(item => item.style_num !== style_num)
    }));
  }

  changeSize = (e, style_num) => {
    this.editData(e,style_num,'size')();
  }

  changeQty = (e, style_num) => {
    this.editData(e,style_num,'qty')();
  }

  //  Factory function because same logic for changing qty and size.
  editData = (e, style_num, dataType) => {
    return () => {
      e.preventDefault();
      // Copy data instead of pointer
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
          <ItemTable items={(!this.itemComponents) ? [] : this.itemComponents}/>
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
    color: 'White',
    size: 'S',
    qty: 1,
    price: 10.99
  },
  {
    url: 'https://images-na.ssl-images-amazon.com/images/I/91MR26Sa4zL._UL1500_.jpg',
    name: 'Shirt 2',
    style_num: '1111112',
    color: 'Turquoise',
    size: 'M',
    qty: 2,
    price: 16.99
  },
  {
    url: 'http://www.sunprecautions.com/content/images/products/17100-3(prlgv)(studio)_900x1200.jpg',
    name: 'Shirt 3',
    style_num: '1111113',
    color: 'Blue',
    size: 'L',
    qty: 1,
    price: 20.99,
    discountPrice: 9.99
  },
  {
    url: 'https://static4.cilory.com/273124-large_default/nologo-navy-casual-shirt.jpg',
    name: 'Shirt 4',
    style_num: '1111114',
    color: 'Blue',
    size: 'XS',
    qty: 3,
    price: 21.99
  }
];