import React from 'react';
import Item from '../Item/Item';

const styles = {
  table: {
    width: '95%',
    margin: '0 auto',
    fontSize: '12px',
    color: 'rgb(155, 155, 155)',
    padding: '0px 0px 10px 0px',
    borderCollapse: 'collapse',
    borderBottom: '4px solid rgb(230, 230, 230)'
  },
  header: {
    borderBottom: '2px solid rgb(230, 230, 230)',
  },
  itemCount: {
    width: '70%',
    padding: '0 0 0 10px',

  },
  size: {
    width: '10%',
  },
  quantity: {
    width: '10%',
  },
  price: {
    width: '10%',
    textAlign: 'left'
  }
}

const ItemTable = ({items, ...props}) => {
  return(
    <table style={styles.table}>
      <tbody>
        <tr style={styles.header}>
          <th style={styles.itemCount}>
            {`${items.length}`} ITEMS
          </th>
          <th style={styles.size}>
            SIZE
          </th>
          <th style={styles.quantity}>
            QTY
          </th>
          <th style={styles.price}>
            PRICE
          </th>
        </tr>  
        {items.map((item, i)=>{
          return(
            <Item
              key={i}
              itemData={item}
              {...props}/>
          )
        })}
      </tbody>
    </table>
  )
}

export default ItemTable;