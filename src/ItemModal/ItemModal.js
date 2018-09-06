import React from 'react';

const styles = {
  modalBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,.6)'
  },
  modal: {
    background: 'white',
    paddingTop: '50px',
    width: '560px',
    height: '350px',
    margin: '25% auto',
    transform: 'translate(0%,-40%)'
  },
  info: {
    display: 'inline-block',
    textAlign: 'center',
    width: '200px',
    height: '235px',
    padding: '0 50px',
    color: 'rgb(100,100,100)',
    fontSize: '14px',
    fontWeight: '550',
  },
  colors: {
    padding: '5px 0',
    color: 'rgb(180,180,180)'
  },
  colorsFlex: {
    display:'inline-flex',
    padding: '0 5px '
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
    display: 'inline-block',
    width: '200px',
    height: '235px',
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
    color: 'black',
    background: 'none',
    border: 'none',
    fontSize: '20px',
    position: 'relative',
    bottom: '20px',
    right: '20px',
    float: 'right'
  }
}

const ItemModal = ({itemData, confirmEdit, closeModal, onQtyEdit, onSizeEdit}) => {
  return(
    <div style={styles.modalBackground}>
      <div style={styles.modal}>
        <div>
          <button 
            onClick={(e)=>closeModal(e)}
            style={styles.close} 
            className="far fa-window-close"></button>
        </div>
        <div style={styles.info}>
          <div>{itemData.name}</div>
          <div style={styles.price}>${itemData.price}</div>
          <br/>
          <div style={styles.colors}>
            <div>{itemData.style_num}</div>
            <div style={styles.colorsFlex}>
              <div style={styles.color1}></div>
              <div style={styles.color2}></div>
              <div style={styles.color3}></div>
            </div>
            <div>Color: {itemData.color}</div>
          </div>
          <select 
            onChange={(e)=>onSizeEdit(e)}
            defaultValue={itemData.size}>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select> 
          {' '}
          <input 
            onChange={(e)=>onQtyEdit(e)}
            type='number'
            min='1'
            style= {styles.qty}
            defaultValue={itemData.qty}></input>
          <br/>
          <button
            style={styles.button}
            onClick={(e)=>{
              confirmEdit(e)
            }}>Edit</button>
          <br/>
          <button style={styles.details}>Check product details</button>
        </div>
        <div style={{display: 'inline-block'}}>
          <img 
            alt='Loading...'
            src={itemData.url}
            style={styles.image}/>
        </div>
      </div>
    </div>
  )
}

export default ItemModal;