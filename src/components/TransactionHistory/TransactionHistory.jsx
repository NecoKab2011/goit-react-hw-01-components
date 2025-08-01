import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";
import { TransactionItem } from "./TransactionItem/TransactionItem";

export const TransactionHistory = ({ transactions }) => {
  return (
     <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr>
          <th className={styles.table__info}>Type</th>
          <th className={styles.table__info}>Amount</th>
          <th className={styles.table__info}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr className={styles.table__row} key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.object.isRequired,
};