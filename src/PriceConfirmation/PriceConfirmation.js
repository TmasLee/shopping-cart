import React, {Component} from 'react'

const styles = {
  confirmation: {
    fontSize: '12px',
    fontWeight: '600',
    color: 'rgb(100,100,100)',
    float: 'right',
    padding: '0 4% 0 0'
  },
  promo: {
    color: 'rgb(155,155,155)',
    borderBottom: '5px solid rgb(200, 200, 200)',
  },
  promoBtn: {
    background: 'none',
    textAlign: 'center',
    verticalAlign: 'text-bottom',
    color: 'rgb(100,100,100)',
    fontSize: '10px',
    fontWeight: '700'
  },
  sub: {
    textAlign: 'right'
  },
  total: {
    fontSize: '14px'
  },
  disclaimer: {
    fontSize: '9px',
  },
  checkoutBtn: {
    background: 'rgb(50,50,250)',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '14px',
    color: 'white',
    border: '1px solid black'
  },
  continueBtn: {
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: '12px',
    color: 'rgb(100,100,100)'
  },
  secure: {
    fontSize: '11px',
    fontWeight: '600',
    color: 'rgb(155,155,155)',
    textAlign: 'right'
  }
}

class PriceConfirmation extends Component {
  constructor(props){
    super(props);
    this.state = {
      subTotal: 0.00,
      promoCode: 'AJ10',
      promoDeduction: 5.90,
      estimatedShipping: 'Free',
      estimatedTotal: 0.00
    }
  }

  componentDidMount(){
    this.calculatePrice(this.props.items);
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.items !== this.props.items){
      this.calculatePrice(this.props.items);
    }
  }

  calculatePrice = (items) => {
    var subTotal = 0;
    for (let i=0; i<items.length; i++){
      subTotal += (items[i].price * items[i].qty);
    }
    let total = subTotal - this.state.promoDeduction;
    this.setState({
      subTotal: subTotal,
      estimatedTotal: total
    });
  }

  render(){
    const {subTotal, promoCode, promoDeduction, estimatedShipping, estimatedTotal} = this.state;
    
    return(
      <div>
        <form style={styles.confirmation}>
          <table style={styles.table}>
            <tbody>
              <tr style={styles.promo}>
                <td>
                  ENTER PROMO CODE OR GIFT CARD
                </td>
                <td>
                  <input 
                    size='4'
                    defaultValue='AJ10'></input>
                  <button style={styles.promoBtn}>APPLY</button>
                </td>  
              </tr>
              <tr style={styles.rows}>
                <td>
                  SUB TOTAL
                </td>
                <td style={styles.sub}>
                  ${parseFloat(subTotal).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>
                  PROMOTION CODE {promoCode} APPLIED
                </td>
                <td style={styles.sub}>
                  {parseFloat(promoDeduction).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>
                  ESTIMATED SHIPPING*
                  <div style={styles.disclaimer}>
                    You qualify for free shipping because your order is over 500 
                  </div>
                </td>
                <td style={styles.sub}>
                  ${estimatedShipping}
                </td>
              </tr>
              <tr>
                <td style={styles.total}>
                  ESTIMATED TOTAL
                  <div style={styles.disclaimer}>
                    Tax will be applied during checkout
                  </div>
                </td>
                <td style={styles.sub}>
                  ${parseFloat(estimatedTotal).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <div style={styles.secure}>
            <button style={styles.continueBtn}>CONTINUE SHOPPING</button>
            <button style={styles.checkoutBtn}>CHECKOUT</button>
            <p>Secure checkout. Shopping is always safe & secure</p>
          </div>
        </form>
      </div>
    )
  }
}

export default PriceConfirmation;