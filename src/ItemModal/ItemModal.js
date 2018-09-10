import React, {Component} from 'react';

const styles = {
  modalBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,.6)',
    zIndex: '100'
  },
  modal: {
    background: 'white',
    display: 'flex',
    width: '560px',
    height: '350px',
    margin: '25% auto',
    transform: 'translate(0%,-5%)',
    zIndex: '101'
  },
  info: {
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: '10%',
    width: '200px',
    height: '235px',
    color: 'rgb(100,100,100)',
    fontSize: '14px',
    fontWeight: '550',
  },
  colors: {
    color: 'rgb(180,180,180)'
  },
  colorsFlex: {
    display:'inline-flex',
  },
  color1: {
    height: '15px',
    width: '20px',
    backgroundColor: 'green'
  },
  color2: {
    height: '15px',
    width: '20px',
    backgroundColor: 'grey'
  },
  color3: {
    height: '15px',
    width: '20px',
    backgroundColor: 'blue'
  },
  qty: {
    width: '3em',
  },
  price: {
    fontSize: '24px',
    fontWeight: '600',
  },
  details: {
    marginTop: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '10px',
    color: 'rgb(55,55,55)'
  },
  image: {
    marginTop: '15%',
    width: '240px',
    height: '280px',
  },
  button: {
    margin: '5px 0',
    background: 'rgb(50,50,250)',
    padding: '10px 40px',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'white',
    border: '1px solid black'
  },
  close: {
    position: 'absolute',
    textAlign: 'right',
    color: 'black',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    top: '10px',
    right: '10px'
  }
}

class ItemModal extends Component {
  constructor(props){
    super(props);
    this.setState = {
      size: this.props.currentState.size,
      qty: this.props.currentState.qty
    }
  }

  componentDidUpdate(prevProps, prevState){

  }

  onQtyEdit = (e) => {
    e.preventDefault();
    this.setState({qty: e.target.value});
  }

  onSizeEdit = (e) => {
    e.preventDefault();
    this.setState({size: e.target.value});
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

  render(){
    const {itemData, toggleModal} = this.props;

    return(
      <div style={styles.modalBackground}
          onClick={(e)=>toggleModal(e)}>
        <div style={styles.modal}>
          <div>
            <button style={styles.close}
                onClick={(e)=>toggleModal(e)}
                className="far fa-window-close"></button>
          </div>
          <div style={styles.info}>
            <div>{itemData.name}</div>
            <div style={styles.price}>${itemData.price}</div>
            <div style={styles.colors}>
              <div>{itemData.style_num}</div>
              <div style={styles.colorsFlex}>
                <div style={styles.color1}></div>
                <div style={styles.color2}></div>
                <div style={styles.color3}></div>
              </div>
              <div>Color: {itemData.color}</div>
            </div>
            <select onChange={(e)=>this.onSizeEdit(e)}
                defaultValue={itemData.size}>
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>
              <option value='XL'>XL</option>
            </select> 
            {' '}
            <input onChange={(e)=>this.onQtyEdit(e)}
                type='number'
                min='1'
                style= {styles.qty}
                defaultValue={itemData.qty}
            ></input>
            <br/>
            <button style={styles.button}
                onClick={(e)=>{this.confirmEdit(e)}}>
              Edit
            </button>
            <button style={styles.details}>Check product details</button>
          </div>
          <div style={{display: 'inline-block'}}>
            <img alt='Loading...' src={itemData.url}
                style={styles.image}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemModal;