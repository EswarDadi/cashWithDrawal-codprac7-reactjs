import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  onDecrement = value => {
    this.setState(prevState => {
      console.log(`prevState amount is ${prevState.initialAmount}`)
      return {initialAmount: prevState.initialAmount - value}
    })
  }

  render() {
    const {denominationsList} = this.props

    const {initialAmount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="flex-container1">
            <p className="s">S</p>
            <h1 className="main-heading">Sarah Williams</h1>
          </div>
          <div className="flex-container">
            <p className="description">Your Balance</p>
            <p className="amount">
              {initialAmount}
              <br />
              in Rupees
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                itemList={eachItem}
                onDecrease={this.onDecrement}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
