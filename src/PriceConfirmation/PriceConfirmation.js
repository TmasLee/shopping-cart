import React, {Component} from 'react'

const styles = {
  confirmation: {
    display: 'inline-block',
    width: '50%',
    fontSize: '12px',
    fontWeight: '600',
    color: 'rgb(100,100,100)',
    float: 'right',
    padding: '0 4% 0 0'
  },
  promo: {
    color: 'rgb(155,155,155)',
    padding: '0 0 10px 0',
    flexWrap: 'nowrap'
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
    border: '1px solid black',
    marginBottom: '5px'
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
  },
  applyPromo: {
    textAlign: 'right',
    display: 'inline'
  },
  promoInput: {
    verticalAlign: 'bottom'
  },
  lockIcon: {
    fontSize: '18px',
    verticalAlign: 'bottom'
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

  componentDidUpdate(prevProps){
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
      <form style={styles.confirmation}>
        <div className='container'>
          <div className='row' style={styles.promo}>
            <div className='col-lg-8'>
              ENTER PROMO CODE OR GIFT CARD
            </div>
            <div style={styles.applyPromo} 
              className='col-lg-4'>
              <input style={styles.promoInput}
                size='3'
                defaultValue='AJ10'></input>
              <button style={styles.promoBtn}>APPLY</button>
            </div>  
          </div>
          <div className='row' style={styles.rows}>
            <div className='col-lg-9'>
              SUB TOTAL
            </div>
            <div className='col-lg-3' style={styles.sub}>
              ${parseFloat(subTotal).toFixed(2)}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-9'>
              PROMOTION CODE {promoCode} APPLIED
            </div>
            <div className='col-lg-3' style={styles.sub}>
              {parseFloat(promoDeduction).toFixed(2)}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-9'>
              ESTIMATED SHIPPING*
              <div style={styles.disclaimer}>
                You qualify for free shipping because your order is over 500 
              </div>
            </div>
            <div className='col-lg-3' style={styles.sub}>
              ${estimatedShipping}
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-9' style={styles.total}>
              ESTIMATED TOTAL
              <div style={styles.disclaimer}>
                Tax will be applied during checkout
              </div>
            </div>
            <div className='col-lg-3' style={styles.sub}>
              ${parseFloat(estimatedTotal).toFixed(2)}
            </div>
          </div>
        </div>
        <div style={styles.secure}>
          <button style={styles.continueBtn}>CONTINUE SHOPPING</button>
          <button style={styles.checkoutBtn}>CHECKOUT</button>
          <p><i style={styles.lockIcon} className="fas fa-lock"></i> Secure checkout. Shopping is always safe & secure</p>
        </div>
      </form>
    )
  }
}

export default PriceConfirmation;