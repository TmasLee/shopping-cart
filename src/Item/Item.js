import React, {Component} from 'react';
import ItemModal from '../ItemModal/ItemModal';

const styles = {
  row: {
    borderBottom: '1px solid rgb(230, 230, 230)',
    verticalAlign: 'top',
  },
  itemInfo:{
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '20px',
    name: {
      color: 'rgb(100,100,100)',
      fontWeight: '700'
    }
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '10px',
    color: 'rgb(100,100,100)'
  },
  image: {
    width: '110px',
    height: '130px',
    padding: '20px 0 20px 0'
  },
  size_qty: {
    padding: '20px 0 0 0',
    width: '3em'
  },
  qty: {
    width: '3em'
  },
  price: {
    fontSize: '16px',
    fontWeight: '600',
    color: 'rgb(100,100,100)',
    padding: '20px 0 0 0'
  },
}

class Item extends Component {
  state = {
    showModal: false,
    size: this.props.itemData.size,
    qty: this.props.itemData.qty
  }

  openModal = () => {
    this.setState((prevState)=>({
      showModal: !prevState.showModal
    }));
  }

  confirmEdit = (e) => {
    e.preventDefault();
    this.setState((prevState)=>({
      showModal: !prevState.showModal,
      size: this.props.itemData.size,
      qty: this.props.itemData.qty
    }));
    this.props.confirmItemEdit(this.state.size, this.state.qty, 
      this.props.itemData.style_num);
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState((prevState)=>({
      showModal: !prevState.showModal
    }));
  }

  onQtyEdit = (e) => {
    e.preventDefault();
    this.setState({qty: e.target.value});
  }

  onSizeEdit = (e) => {
    e.preventDefault();
    this.setState({size: e.target.value});
  }

  render(){
    const {itemData, removeItem, changeSize, changeQty} = this.props;
    let modal;

    if (this.state.showModal){
      modal = (<ItemModal itemData={itemData}
        size={this.state.size}
        qty={this.state.qty}
        confirmEdit={this.confirmEdit}
        closeModal={this.closeModal}
        onQtyEdit={this.onQtyEdit}
        onSizeEdit={this.onSizeEdit}/>)
    }
    return(
      <tr style={styles.row}>
        <td>
          {modal}
          <img 
            alt='Loading...'
            src={itemData.url}
            style={styles.image}/>
          <div style={styles.itemInfo}>
            <div style={styles.itemInfo.name}>
              {itemData.name}
            </div>
            <div>Style #: {itemData.style_num}</div>
            <div>Color: {itemData.color}</div>
            <div>
              <button 
                style={styles.button}
                onClick={(e)=>{
                  e.preventDefault();
                  this.openModal(itemData);
                }}>EDIT</button>
              {' | '}
              <button 
                style={styles.button}
                onClick={(e)=>{
                  e.preventDefault();
                  removeItem(itemData.style_num);
                }}>X REMOVE</button>
              {' | '}
              <button style={styles.button}>SAVE FOR LATER</button>
            </div>
          </div>
        </td>
        <td style={styles.size_qty}>
          <select 
            value={itemData.size}
            onChange={(e)=>{
              changeSize(e,itemData.style_num);
          }}>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </td>
        <td style={styles.size_qty}>
          <input 
            type='number'
            min='1'
            style= {styles.qty}
            value={itemData.qty}
            onChange={(e)=>{
              changeQty(e,itemData.style_num);
            }}
          ></input>
        </td>
        <td style={styles.price}>${itemData.price}</td>
      </tr>
    )
  }
}

export default Item;