import React from 'react';

const styles = {
  help:{
    fontSize: '10px',
    color: 'rgb(155,155,155)',
    float: 'left',
    padding: '0 0 0 4%'
  },
  customerService: {
    fontSize: '11px',
    fontWeight: '600'
  },
  links: {
    color: 'rgb(100,100,100)',
    fontWeight: '600',
  },
}

const Help = () => {
  return(
    <div style={styles.help}>
      <p style={styles.customerService}>Need help or have questions?</p>
      <p>Call Customer Service at 1-800-555</p>
      <p><a href='' style={styles.links}>Chat with one of our stylists</a></p>
      <p><a href='' style={styles.links}>See return or exhange policy</a></p>
    </div>
  )
}

export default Help;