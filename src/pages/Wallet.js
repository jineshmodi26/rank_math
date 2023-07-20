import React from 'react'
import BottomNav from '../components/wallet/BottomNav/Main'
import BuySell from '../components/wallet/BuySell/Main'
import Chart from '../components/wallet/Chart/Main'
import Crypto from '../components/wallet/Crypto/Main'
import Navigation from '../components/wallet/Navigation/Navigation'
import "./wallet.css"

const Wallet = () => {
  return (
    <div className='wallet'>
        <Navigation />
        <Crypto />
        <Chart /> 
        <BuySell />
        <BottomNav />
    </div>
  )
}

export default Wallet