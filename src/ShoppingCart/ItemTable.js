import React from 'react';

const styles = {
  table: {
    width: '95%',
    margin: '0 auto',
    fontSize: '12px',
    color: 'rgb(155, 155, 155)',
    paddingRight: '0',
    paddingLeft: '0',
    borderCollapse: 'collapse',
    borderBottom: '4px solid rgb(230, 230, 230)'
  },
  header: {
    borderBottom: '2px solid rgb(230, 230, 230)',
  },
  itemCount: {
    width: '70%',
  },
  size: {
    width: '10%',
    textAlign: 'center'
  },
  quantity: {
    width: '10%',
    textAlign: 'center'
  },
  price: {
    width: '10%',
    textAlign: 'center'
  }
}

const ItemTable = ({items}) => {
  return(
    <div className='container' 
      style={styles.table}>
      <div className='row justify-content-md-center' 
        style={styles.header}>
        <div className='col col-lg-6' 
          style={styles.itemCount}>
          {`${items.length}`} items
        </div>
        <div className='col col-lg-2'
          style={styles.size}>
          SIZE
        </div>
        <div className='col col-lg-2'
          style={styles.quantity}>
          QTY
        </div>
        <div className='col col-lg-2'
          style={styles.price}>
          PRICE
        </div>
      </div>
      {items}
    </div>
  )
}

export default ItemTable;