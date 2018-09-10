import React from 'react';

const styles = {
  help:{
    fontSize: '10px',
    color: 'rgb(120,120,120)',
    float: 'left',
    padding: '0 0 0 4%',
  },
  customerService: {
    fontSize: '11px',
    fontWeight: '600',
    marginBottom: '.5rem'
  },
  links: {
    color: 'rgb(100,100,100)',
    fontWeight: '600',
    textDecoration: 'underline'
  },
  p: {
    marginBottom: '.4rem'
  }
}

const Help = () => {
  return(
    <div style={styles.help}>
      <p style={styles.customerService}>Need help or have questions?</p>
      <p style={styles.p}>Call Customer Service at <a href='' style={styles.links}>1-800-555</a></p>
      <p style={styles.p}><a href='' style={styles.links}>Chat with one of our stylists</a></p>
      <p style={styles.p}><a href='' style={styles.links}>See return or exhange policy</a></p>
    </div>
  )
}

export default Help;