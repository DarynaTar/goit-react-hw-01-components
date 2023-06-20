import PropTypes from 'prop-types'
import css from './transactions.module.css'

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.history}>
      <thead className={css.head}>
        <tr className={css.tr}>
          <th className={css.type}>Type</th>
          <th className={css.amount}>Amount</th>
          <th className={css.currency}>Currency</th>
        </tr>
      </thead>
 
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tr}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}
