import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

function TransactionHistory ({data}) {
    return (
        <table className={style.table}>
  <thead>
    <tr className={style.head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {data.map(({id, amount, type, currency}, index) => {
        let backgroundColor = index % 2 === 0 ? style.light : style.dark;
        return (
            <tr key={id} className={`${style.row} ${backgroundColor}`}>
              <td className={style.text}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
        );
    })}
  </tbody>
</table>

    );
}


export default TransactionHistory;

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};