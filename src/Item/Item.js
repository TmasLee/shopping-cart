import React, {Component} from 'react';
import ItemModal from '../ItemModal/ItemModal';

const styles = {
  row: {
    borderBottom: '1px solid rgb(230, 230, 230)',
    padding: '15px 0px',
    flexWrap: 'nowrap'
  },
  itemInfo:{
    width: '70%',
    padding: '0px',
    name: {
      color: 'rgb(100,100,100)',
      fontWeight: '700',
      paddingLeft: '6px',
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
  },
  size_qty: {
    padding: '20px 0 0 20px',
    width: '10%',
    textAlign: 'center',
  },
  qty: {
    width: '3em',
  },
  price: {
    padding: '20px 0 0 20px',
    textAlign: 'center',
    width: '10%',
    fontSize: '16px',
    fontWeight: '600',
    color: 'rgb(100,100,100)',
  },
  infoBlock: {
    display: 'inline-block',
  }
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
        confirmEdit={this.confirmEdit}
        closeModal={this.closeModal}
        onQtyEdit={this.onQtyEdit}
        onSizeEdit={this.onSizeEdit}/>)
    }
    return(
      <div className='row' style={styles.row}>
        <div className='col-lg-6' style={styles.itemInfo}>
          <img alt='Loading...'
            src={itemData.url}
            style={styles.image}/>
          <div style={styles.infoBlock}>
            <div style={styles.itemInfo.name}>
              {itemData.name}
            </div>
            <div style={{paddingLeft:'6px'}}>Style #: {itemData.style_num}</div>
            <div style={{paddingLeft:'6px'}}>Color: {itemData.color}</div>
            <button style={styles.button}
              onClick={(e)=>{
                e.preventDefault();
                this.openModal(itemData);
              }}>EDIT</button>
            {' | '}
            <button style={styles.button}
              onClick={(e)=>{
                e.preventDefault();
                removeItem(itemData.style_num);
              }}>X REMOVE</button>
            {' | '}
            <button style={styles.button}>SAVE FOR LATER</button>
          </div>
        </div>
        <div className='col-lg-2' style={styles.size_qty}>
          <select value={itemData.size}
            onChange={(e)=>{
              changeSize(e,itemData.style_num);
          }}>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </div>
        <div className='col-lg-2' style={styles.size_qty}>
          <input type='number'
            min='1'
            style= {styles.qty}
            value={itemData.qty}
            onChange={(e)=>{
              changeQty(e,itemData.style_num);
            }}
          ></input>
        </div>
        <div className='col-lg-2' style={styles.price}>
          ${itemData.price}
        </div>
      </div>
    )
  }
}

export default Item;