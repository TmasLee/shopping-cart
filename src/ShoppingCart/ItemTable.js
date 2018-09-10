import React from 'react';

const styles = {
  table: {
    width: '90%',
    margin: '0 auto',
    fontSize: '12px',
    fontWeight: '700',
    color: 'rgb(155, 155, 155)',
    paddingRight: '0',
    paddingLeft: '0',
    borderCollapse: 'collapse',
  },
  header: {
    borderBottom: '2px solid rgb(230, 230, 230)',
    flexWrap: 'nowrap'
  },
  itemCount: {
    paddingLeft: '20px',
  },
  size: {
    textAlign: 'center'
  },
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
          style={styles.size}>
          QTY
        </div>
        <div className='col col-lg-2'
          style={styles.size}>
          PRICE
        </div>
      </div>
      {items}
    </div>
  )
}

export default ItemTable;