import css from './Transaction.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const TransactionHistory = ({ item }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.head}>
        <tr className={css.head__wrapper}>
          <th className={css.head__item}>Type</th>
          <th className={css.head__item}>Amount</th>
          <th className={css.head__item}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.body}>
        {item.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.body__wrapper}>
              <td className={css.body__item}>{type}</td>
              <td className={css.body__item}>{amount}</td>
              <td className={css.body__item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    }).isRequired
  ),
};
