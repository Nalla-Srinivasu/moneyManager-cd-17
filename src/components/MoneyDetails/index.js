/* eslint-disable react/no-unknown-property */
// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenseAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="image"
        />
        <div>
          <p className="heading-text">Your Balance</p>
          <p className="value" testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="text-container">
          <p className="heading-text">Your Income</p>
          <p className="value" testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="text-container">
          <p className="heading-text">Your Expenses</p>
          <p className="value" testid="expenseAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
